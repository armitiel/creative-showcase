import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/i18n/LanguageContext';

const translations = {
  pl: {
    title: 'Co sądzisz o tym portfolio?',
    subtitle: 'Twoja opinia pomoże mi je ulepszyć',
    qualityLabel: 'Jak oceniasz jakość strony?',
    projectsLabel: 'Ilość prezentowanych projektów jest:',
    projectsOptions: ['Za mało', 'W sam raz', 'Za dużo'],
    improvementsLabel: 'Co mogę poprawić?',
    improvementsPlaceholder: 'Np. nawigacja, prędkość ładowania, czytelność...',
    submit: 'Wyślij opinię',
    thanks: 'Dziękuję za opinię!',
    thanksSubtitle: 'Twój feedback jest dla mnie bardzo cenny.',
    close: 'Zamknij',
    skip: 'Może później',
  },
  en: {
    title: 'What do you think of this portfolio?',
    subtitle: 'Your feedback will help me improve it',
    qualityLabel: 'How do you rate the website quality?',
    projectsLabel: 'The number of presented projects is:',
    projectsOptions: ['Too few', 'Just right', 'Too many'],
    improvementsLabel: 'What can I improve?',
    improvementsPlaceholder: 'E.g. navigation, loading speed, readability...',
    submit: 'Send feedback',
    thanks: 'Thank you for your feedback!',
    thanksSubtitle: 'Your feedback is very valuable to me.',
    close: 'Close',
    skip: 'Maybe later',
  },
};

export const SurveyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [projectsAmount, setProjectsAmount] = useState<number | null>(null);
  const [improvements, setImprovements] = useState('');
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Check if already shown or dismissed
    const surveyShown = sessionStorage.getItem('surveyShown');
    const surveyDismissed = localStorage.getItem('surveyDismissed');
    
    if (surveyDismissed) return;

    let scrollCount = parseInt(sessionStorage.getItem('bottomScrollCount') || '0', 10);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Check if user is near the bottom (within 100px)
      const isAtBottom = scrollTop + windowHeight >= docHeight - 100;
      
      if (isAtBottom) {
        const wasAtBottom = sessionStorage.getItem('wasAtBottom') === 'true';
        
        if (!wasAtBottom) {
          scrollCount++;
          sessionStorage.setItem('bottomScrollCount', scrollCount.toString());
          sessionStorage.setItem('wasAtBottom', 'true');
          
          // Show popup on second scroll to bottom
          if (scrollCount >= 2 && !surveyShown) {
            setTimeout(() => {
              setIsOpen(true);
              sessionStorage.setItem('surveyShown', 'true');
            }, 500);
          }
        }
      } else {
        sessionStorage.setItem('wasAtBottom', 'false');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = () => {
    // Here you could send data to analytics or backend
    console.log('Survey submitted:', { rating, projectsAmount, improvements });
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      localStorage.setItem('surveyDismissed', 'true');
    }, 2500);
  };

  const handleDismiss = () => {
    setIsOpen(false);
    localStorage.setItem('surveyDismissed', 'true');
  };

  const handleSkip = () => {
    setIsOpen(false);
    // Don't set dismissed - will show again next session
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleSkip}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90vw] max-w-md"
          >
            <div className="relative bg-gradient-to-br from-card via-card to-card/95 border border-primary/20 rounded-2xl shadow-2xl shadow-primary/10 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
              
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                      <p className="text-sm text-muted-foreground">{t.subtitle}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      {t.qualityLabel}
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoveredRating(star)}
                          onMouseLeave={() => setHoveredRating(0)}
                          className="transition-transform hover:scale-110 active:scale-95"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${
                              star <= (hoveredRating || rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-muted-foreground/30'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Projects amount */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      {t.projectsLabel}
                    </label>
                    <div className="flex gap-2">
                      {t.projectsOptions.map((option, index) => (
                        <button
                          key={option}
                          onClick={() => setProjectsAmount(index)}
                          className={`flex-1 py-2.5 px-3 text-sm rounded-lg border transition-all ${
                            projectsAmount === index
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'bg-muted/30 border-border hover:border-primary/50 text-foreground'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Improvements */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-foreground mb-3">
                      {t.improvementsLabel}
                    </label>
                    <Textarea
                      value={improvements}
                      onChange={(e) => setImprovements(e.target.value)}
                      placeholder={t.improvementsPlaceholder}
                      className="resize-none bg-muted/30 border-border focus:border-primary/50 min-h-[80px]"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      onClick={handleSkip}
                      className="flex-1 text-muted-foreground hover:text-foreground"
                    >
                      {t.skip}
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={rating === 0}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {t.submit}
                    </Button>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: 'spring', damping: 15 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center"
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <motion.path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{t.thanks}</h3>
                  <p className="text-muted-foreground">{t.thanksSubtitle}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
