import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/Reveal';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio — ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
    window.location.href = `mailto:armitiel@gmail.com?subject=${subject}&body=${body}`;
    toast.success(t.contact.successTitle, { description: t.contact.successDescription });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="sec sec-alt" id="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <div>
            <div className="kicker">{t.contact.kicker}</div>
          </div>
          <div className="section-num">/ 04</div>
        </Reveal>
        <div className="contact-grid">
          <Reveal>
            <h2 className="contact-title">{t.contact.title}</h2>
            <p className="contact-lead">{t.contact.lead}</p>
            <div className="contact-rows">
              <div className="contact-row">
                <span className="lbl">{t.contact.emailLabel}</span>
                <a className="val" href="mailto:armitiel@gmail.com">
                  armitiel@gmail.com
                </a>
              </div>
              <div className="contact-row">
                <span className="lbl">{t.contact.phoneLabel}</span>
                <a className="val" href="tel:+48577237417">
                  +48 577 237 417
                </a>
              </div>
              <div className="contact-row">
                <span className="lbl">{t.contact.locationLabel}</span>
                <span className="val">{t.contact.location}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.09}>
            <form className="cform" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                placeholder={t.contact.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
              <button type="submit">{t.contact.send}</button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
