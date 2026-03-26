const crypto = require('crypto');

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redisCmd(...args) {
  const res = await fetch(`${UPSTASH_URL}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}` },
    body: JSON.stringify(args),
  });
  const data = await res.json();
  return data.result;
}

function parseCookies(cookieHeader) {
  const out = {};
  if (!cookieHeader) return out;
  for (const part of String(cookieHeader).split(';')) {
    const idx = part.indexOf('=');
    if (idx === -1) continue;
    const k = part.slice(0, idx).trim();
    const v = part.slice(idx + 1).trim();
    if (k) out[k] = decodeURIComponent(v);
  }
  return out;
}

function makeCookie(name, value, maxAge) {
  return `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'GET') {
    res.statusCode = 405;
    return res.json({ error: 'Method Not Allowed' });
  }

  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return res.json({ count: null, error: 'Counter not configured' });
  }

  try {
    const cookies = parseCookies(req.headers.cookie);
    const ua = String(req.headers['user-agent'] || '').toLowerCase();
    const isBot = /bot|spider|crawler|headless/.test(ua);

    const COUNTER_KEY = 'portfolio:visits';
    const TTL = 60 * 60 * 24;

    let vid = cookies.pf_vid;
    const setCookies = [];
    if (!vid) {
      vid = crypto.randomBytes(16).toString('hex');
      setCookies.push(makeCookie('pf_vid', vid, 60 * 60 * 24 * 365));
    }
    if (setCookies.length) res.setHeader('Set-Cookie', setCookies);

    let count;
    if (isBot) {
      count = await redisCmd('GET', COUNTER_KEY);
    } else {
      const seenKey = `portfolio:visits:seen:${vid}`;
      const firstInWindow = await redisCmd('SET', seenKey, '1', 'NX', 'EX', TTL);
      if (firstInWindow) {
        count = await redisCmd('INCR', COUNTER_KEY);
      } else {
        count = await redisCmd('GET', COUNTER_KEY);
      }
    }

    return res.json({ count: Number(count || 0) });
  } catch (e) {
    return res.json({ count: null, error: 'Counter backend error' });
  }
};
