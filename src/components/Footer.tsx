import { useLanguage } from '@/i18n/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative py-8 border-t border-border bg-card text-card-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-card-foreground/60 text-sm">
            © 2026 Amitiel Angelisme. {t.footer.rights}
          </p>
          <p className="text-card-foreground/60 text-sm">
            {t.footer.madeWith} <span className="text-primary">♥</span> {t.footer.inPoland}
          </p>
        </div>
      </div>
      
      {/* Aurora borealis neon glow at bottom edge */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[hsl(210,100%,50%)] to-transparent opacity-80 animate-[aurora-pulse_3s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-full h-[20px] bg-gradient-to-t from-[hsl(210,100%,50%)]/20 to-transparent blur-[8px] animate-[aurora-pulse_3s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-[10%] w-[30%] h-[30px] bg-gradient-to-t from-[hsl(200,100%,60%)]/15 to-transparent blur-[12px] animate-[aurora-shift_5s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-[15%] w-[25%] h-[25px] bg-gradient-to-t from-[hsl(220,100%,55%)]/15 to-transparent blur-[10px] animate-[aurora-shift_4s_ease-in-out_infinite_reverse]" />
    </footer>
  );
};
