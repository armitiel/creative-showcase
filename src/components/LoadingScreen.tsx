import { useEffect, useState, useRef } from 'react';
import logo from '@/assets/logo.png';

/** Hide the inline HTML splash screen (defined in index.html) */
function dismissHtmlSplash() {
  const splash = document.getElementById('splash');
  if (splash) {
    splash.classList.add('hide');
    setTimeout(() => splash.remove(), 500);
  }
}

/** Sync progress to the inline HTML splash bar while it's still visible */
function syncSplashBar(pct: number) {
  const bar = document.getElementById('splash-bar');
  if (bar) bar.style.width = `${pct}%`;
}

interface LoadingScreenProps {
  progress: number;
  isLoaded: boolean;
  onFinished: () => void;
}

export const LoadingScreen = ({ progress, isLoaded, onFinished }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);
  const splashDismissed = useRef(false);

  // Once React loading screen mounts, remove the HTML splash
  useEffect(() => {
    if (!splashDismissed.current) {
      splashDismissed.current = true;
      dismissHtmlSplash();
    }
  }, []);

  // Keep HTML splash bar in sync while it's still visible
  useEffect(() => { syncSplashBar(progress); }, [progress]);

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
          className="w-14 md:w-20 object-contain invert"
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
