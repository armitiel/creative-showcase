import { useLanguage } from '@/i18n/LanguageContext';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const { t } = useLanguage();
  const [visits, setVisits] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/visits', { cache: 'no-store' })
      .then(r => r.json())
      .then(data => {
        if (data.count != null) setVisits(data.count);
      })
      .catch(() => {});
  }, []);

  return (
    <footer className="relative px-4 md:px-8 pb-4">
      <div className="relative rounded-3xl bg-card text-card-foreground overflow-hidden py-4 px-4 md:px-8">
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-card-foreground/60 text-sm">
              © 2026 Amitiel Angelisme.<br className="md:hidden" /> {t.footer.rights}
            </p>
            <p className="text-card-foreground/60 text-sm">
              {t.footer.madeWith} <span className="text-primary">♥</span> {t.footer.inPoland}
            </p>
            {visits !== null && (
              <p className="text-card-foreground/40 text-xs">
                {t.footer.visits}: {visits.toLocaleString()}
              </p>
            )}
          </div>
        </div>

        {/* Aurora glow emerging from dark space */}
        <div className="absolute bottom-0 left-0 w-full h-[60px] pointer-events-none rounded-b-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,20%,4%)] via-[hsl(220,20%,4%)]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[hsl(210,100%,50%)] to-transparent opacity-90 animate-[aurora-pulse_3s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-0 w-full h-[25px] bg-gradient-to-t from-[hsl(210,100%,50%)]/25 to-transparent blur-[10px] animate-[aurora-pulse_3s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-[5%] w-[35%] h-[35px] bg-gradient-to-t from-[hsl(200,100%,60%)]/20 to-transparent blur-[14px] animate-[aurora-shift_5s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 right-[10%] w-[30%] h-[30px] bg-gradient-to-t from-[hsl(220,100%,55%)]/18 to-transparent blur-[12px] animate-[aurora-shift_4s_ease-in-out_infinite_reverse]" />
          <div className="absolute bottom-0 left-[20%] w-[60%] h-[40px] bg-gradient-to-t from-[hsl(215,100%,50%)]/10 to-transparent blur-[20px] animate-[aurora-pulse_4s_ease-in-out_infinite]" />
        </div>
      </div>
    </footer>
  );
};
