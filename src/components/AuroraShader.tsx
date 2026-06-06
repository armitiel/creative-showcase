import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * AuroraShader — premium, organiczne tlo gradientowe oparte na Simplex Noise (fBm).
 * Animowane w czasie, reaguje na ruch myszki, przejscia tonalne sa idealnie gladkie
 * i nigdy nie powtarzaja sie tak samo. Paleta: czern-granat -> niebieski -> indygo -> fiolet.
 */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    // Fullscreen quad - ignorujemy kamere (position.xy w zakresie -1..1)
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2  uMouse;   // -1..1
  uniform vec2  uAspect;  // korekcja proporcji

  // --- Simplex 3D noise (Ashima Arts / Stefan Gustavson, MIT/public domain) ---
  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0);
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  // Fractal Brownian Motion - warstwy szumu daja organiczny, "luksusowy" detal
  float fbm(vec3 p){
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * snoise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main(){
    vec2 uv = vUv;
    vec2 p = (uv - 0.5) * uAspect;

    float t = uTime * 0.05;
    vec2  m = uMouse * 0.45;

    // Domena szumu zniekształcana w czasie + przesuwana myszka (domain warping).
    // Mniejszy mnoznik = zblizenie -> wieksze, bardziej rozlane plamy koloru.
    vec3 q  = vec3(p * 0.7 + m, t);
    float n1 = fbm(q);
    float n2 = fbm(q + vec3(3.7, 1.2, t * 0.8) + n1 * 0.8);
    float n3 = fbm(q * 0.7 - vec3(1.5, 2.3, t * 0.6) + n2 * 0.5);

    // Paleta: czern-granat -> niebieski -> indygo -> fiolet
    vec3 cDark   = vec3(0.012, 0.020, 0.055); // ~#03050e
    vec3 cBlue   = vec3(0.231, 0.510, 0.965); // ~#3b82f6
    vec3 cIndigo = vec3(0.310, 0.275, 0.898); // ~#4f46e5
    vec3 cViolet = vec3(0.659, 0.333, 0.969); // ~#a855f7

    float f1 = smoothstep(-0.6, 0.75, n1);
    float f2 = smoothstep(-0.4, 0.85, n2);
    float f3 = smoothstep( 0.0, 1.00, 0.5 + 0.5 * sin(n3 * 3.14159 + t * 1.5));

    vec3 col = cDark;
    col = mix(col, cBlue,   f1 * 0.95);
    col = mix(col, cViolet, f2 * 0.60);
    col = mix(col, cIndigo, f3 * 0.40);

    // Delikatny "blask" w miejscu wskazywanym myszka
    vec2 mp = (uMouse * 0.5);
    float glow = smoothstep(0.9, 0.0, length(p - mp));
    col += cBlue * glow * 0.12;

    // Subtelna winieta - przyciemnia krawedzie, poprawia czytelnosc tekstu
    float vig = smoothstep(1.35, 0.25, length((uv - 0.5) * vec2(1.0, 1.15)) * 1.4);
    col *= mix(0.5, 1.0, vig);

    gl_FragColor = vec4(col, 1.0);
  }
`;

function AuroraPlane() {
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const target = useRef(new THREE.Vector2(0, 0));
  const { size } = useThree();

  const reducedMotion = useRef(false);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uAspect: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  // Globalny ruch myszki (niezalezny od pointer-events warstwy tla)
  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedMotion.current = mql.matches;
    const onMql = (e: MediaQueryListEvent) => (reducedMotion.current = e.matches);
    mql.addEventListener('change', onMql);

    const onMove = (e: PointerEvent) => {
      target.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -((e.clientY / window.innerHeight) * 2 - 1)
      );
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      mql.removeEventListener('change', onMql);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  useFrame((_, delta) => {
    const d = Math.min(delta, 0.05); // stabilnosc przy spadkach FPS
    // Plynne dazenie do pozycji myszki (luksusowy, leniwy ruch)
    mouse.current.lerp(target.current, Math.min(1, d * 2.5));
    uniforms.uMouse.value.copy(mouse.current);
    uniforms.uTime.value += reducedMotion.current ? 0 : d;
    uniforms.uAspect.value.set(size.width / size.height, 1);
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export const AuroraShader = () => {
  return (
    <Canvas
      gl={{ antialias: false, alpha: false, powerPreference: 'high-performance' }}
      dpr={[1, 1.5]}
      frameloop="always"
      camera={{ position: [0, 0, 1] }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <AuroraPlane />
    </Canvas>
  );
};
