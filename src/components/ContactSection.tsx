import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  { name: 'Behance', href: '#', icon: 'Be' },
  { name: 'Dribbble', href: '#', icon: 'Dr' },
  { name: 'LinkedIn', href: '#', icon: 'Li' },
  { name: 'Instagram', href: '#', icon: 'Ig' },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Wiadomość wysłana!', {
      description: 'Dziękuję za kontakt. Odpowiem najszybciej jak to możliwe.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Poppins']">
            <span className="text-gradient">Kontakt</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Masz projekt do realizacji? Napisz do mnie!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">kontakt@jankowalski.pl</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <p className="font-medium">+48 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lokalizacja</p>
                  <p className="font-medium">Warszawa, Polska</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Social Media</p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-sm font-bold text-muted-foreground hover:text-primary hover:glow-cyan transition-all duration-300"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                placeholder="Twoje imię"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-secondary border-border focus:border-primary"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Twój email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-secondary border-border focus:border-primary"
              />
            </div>
            <div>
              <Textarea
                placeholder="Twoja wiadomość..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-secondary border-border focus:border-primary resize-none"
              />
            </div>
            <Button type="submit" className="w-full gap-2">
              <Send className="w-4 h-4" />
              Wyślij wiadomość
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
