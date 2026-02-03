import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useLanguage } from '@/i18n/LanguageContext';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.contact.successTitle, {
      description: t.contact.successDescription,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={headerRef}
          className={`text-center mb-12 opacity-0 ${headerVisible ? 'animate-fade-in' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl font-normal mb-4 font-['Righteous']">
            <span className="text-gradient">{t.contact.title}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto opacity-0 ${
            contentVisible ? 'animate-fade-in' : ''
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted/60 rounded-2xl flex items-center justify-center border border-border/50">
                  <Mail className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.emailLabel}</p>
                  <p className="font-medium">armitiel@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted/60 rounded-2xl flex items-center justify-center border border-border/50">
                  <Phone className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.phoneLabel}</p>
                  <p className="font-medium">+48 577 237 417</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-muted/60 rounded-2xl flex items-center justify-center border border-border/50">
                  <MapPin className="w-5 h-5 text-foreground/70" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.locationLabel}</p>
                  <p className="font-medium">{t.contact.location}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder={t.contact.namePlaceholder}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-muted/50 text-foreground placeholder:text-muted-foreground border-border/50 focus:border-primary focus:bg-muted/70 rounded-xl"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder={t.contact.emailPlaceholder}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-muted/50 text-foreground placeholder:text-muted-foreground border-border/50 focus:border-primary focus:bg-muted/70 rounded-xl"
              />
            </div>
            <div>
              <Textarea
                placeholder={t.contact.messagePlaceholder}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-muted/50 text-foreground placeholder:text-muted-foreground border-border/50 focus:border-primary focus:bg-muted/70 resize-none rounded-xl"
              />
            </div>
            <Button type="submit" className="w-full gap-2">
              <Send className="w-4 h-4" />
              {t.contact.send}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
