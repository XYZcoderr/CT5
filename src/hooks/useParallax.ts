import { useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  disabled?: boolean;
}

export const useParallax = ({ speed = 0.1, disabled = false }: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled || !elementRef.current) return;

    const element = elementRef.current;
    let ticking = false;
    let lastScrollY = window.scrollY;

    const updatePosition = () => {
      const bounds = element.getBoundingClientRect();
      const visible = bounds.top < window.innerHeight && bounds.bottom > 0;
      
      if (visible) {
        const offset = (window.scrollY - lastScrollY) * speed;
        const currentTransform = new WebKitCSSMatrix(window.getComputedStyle(element).transform);
        const newY = currentTransform.m42 + offset;
        element.style.transform = `translateY(${newY}px)`;
      }
      
      lastScrollY = window.scrollY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updatePosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [speed, disabled]);

  return elementRef;
};