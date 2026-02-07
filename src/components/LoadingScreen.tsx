import { useEffect, useState } from 'react';
import logo from '@/assets/logo.png';

interface LoadingScreenProps {
  progress: number;
  isLoaded: boolean;
  onFinished: () => void;
}

export const LoadingScreen = ({ progress, isLoaded, onFinished }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      // Small delay before fade-out for smooth UX
      const timer = setTimeout(() => setFadeOut(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(onFinished, 600);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a0a0a] transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo / Brand */}
      <div className="mb-12 flex items-center justify-center">
        <img
          src={logo}
          alt="Logo"
          className="w-14 h-14 md:w-20 md:h-20 invert"
        />
      </div>

      {/* Progress bar container */}
      <div className="w-64 md:w-80">
        <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-white/50 text-xs text-center mt-3 tabular-nums font-mono">
          {progress}%
        </p>
      </div>
    </div>
  );
};
