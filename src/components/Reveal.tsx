import { ReactNode, CSSProperties } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'figure';
  style?: CSSProperties;
  onClick?: () => void;
}

/** Wrapper that fades content in on scroll (editorial `.reveal` style). */
export const Reveal = ({ children, className = '', delay = 0, as = 'div', style, onClick }: RevealProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  const Tag = as as 'div';

  return (
    <Tag
      ref={ref}
      onClick={onClick}
      className={`reveal ${isVisible ? 'in' : ''} ${className}`.trim()}
      style={{ ...style, transitionDelay: delay ? `${delay}s` : undefined }}
    >
      {children}
    </Tag>
  );
};
