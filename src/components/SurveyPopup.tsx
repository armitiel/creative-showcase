import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/i18n/LanguageContext';
import { supabase } from '@/lib/supabase';

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

interface SurveyPopupProps {
  ready?: boolean;
}

export const SurveyPopup = ({ ready = true }: SurveyPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [projectsAmount, setProjectsAmount] = useState<number | null>(null);
  const [improvements, setImprovements] = useState('');
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('showSurvey') === '1') {
      setIsOpen(true);
      return;
    }

    const surveyDismissed = localStorage.getItem('surveyDismissed');
    if (surveyDismissed) return;

    // Wait until page is fully loaded before starting the delay
    if (!ready) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, [ready]);

  const handleSubmit = async () => {
    const projectsAmountLabel = t.projectsOptions[projectsAmount ?? 0];
    const surveyData = {
      rating,
      projects_amount: projectsAmountLabel,
      improvements,
      language,
    };

    if (supabase) {
      const { error } = await supabase.from('survey_responses').insert(surveyData);
      if (error) console.error('Supabase survey error:', error);
    }

    const forStorage = {
      ...surveyData,
      timestamp: new Date().toISOString(),
    };
    const existingResponses = JSON.parse(localStorage.getItem('surveyResponses') || '[]');
    existingResponses.push(forStorage);
    localStorage.setItem('surveyResponses', JSON.stringify(existingResponses));

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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden w-full max-w-md pointer-events-auto">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/20 to-transparent" />
              
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-400 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-gray-900 text-white">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{t.title}</h3>
                      <p className="text-sm text-gray-500">{t.subtitle}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
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
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Projects amount */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      {t.projectsLabel}
                    </label>
                    <div className="flex gap-2">
                      {t.projectsOptions.map((option, index) => (
                        <button
                          key={option}
                          onClick={() => setProjectsAmount(index)}
                          className={`flex-1 py-2.5 px-3 text-sm rounded-lg border transition-all ${
                            projectsAmount === index
                              ? 'bg-gray-900 text-white border-gray-900'
                              : 'bg-gray-50 border-gray-200 hover:border-gray-400 text-gray-700'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Improvements */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      {t.improvementsLabel}
                    </label>
                    <Textarea
                      value={improvements}
                      onChange={(e) => setImprovements(e.target.value)}
                      placeholder={t.improvementsPlaceholder}
                      className="resize-none bg-gray-50 border-gray-200 focus:border-gray-400 min-h-[80px] text-gray-900 placeholder:text-gray-400"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      onClick={handleSkip}
                      className="flex-1 text-gray-500 hover:text-gray-900 hover:bg-gray-100"
                    >
                      {t.skip}
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={rating === 0}
                      className="flex-1 bg-gray-900 hover:bg-gray-800 text-white gap-2"
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
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"
                  >
                    <motion.svg
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="w-8 h-8 text-green-600"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.thanks}</h3>
                  <p className="text-gray-500">{t.thanksSubtitle}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
