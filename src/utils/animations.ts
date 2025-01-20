export const parallaxScroll = (element: HTMLElement, speed: number = 0.5) => {
  if (!element) return;

  const handleScroll = () => {
    const scroll = window.scrollY;
    const boundingRect = element.getBoundingClientRect();
    const elementTop = boundingRect.top + scroll;
    const windowHeight = window.innerHeight;
    
    // Only animate when element is in viewport
    if (scroll + windowHeight > elementTop && scroll < elementTop + boundingRect.height) {
      const relativeScroll = (scroll + windowHeight - elementTop) * speed;
      element.style.transform = `translateY(${relativeScroll}px)`;
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial position

  // Cleanup function
  return () => window.removeEventListener('scroll', handleScroll);
};

export const fadeIn = (element: HTMLElement, duration: number = 300, delay: number = 0) => {
  if (!element) return;

  // Reset initial state
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease-in-out ${delay}ms`;
  element.style.visibility = 'hidden';

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.style.visibility = 'visible';
          element.style.opacity = '1';
        }, delay);
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.1
  });

  observer.observe(element);

  // Cleanup function
  return () => observer.disconnect();
};