export const parallaxScroll = (element: HTMLElement, speed: number) => {
  const scroll = window.pageYOffset;
  element.style.transform = `translateY(${scroll * speed}px)`;
};

export const fadeIn = (element: HTMLElement, duration: number = 300) => {
  element.style.opacity = '0';
  element.style.transition = `opacity ${duration}ms ease-in-out`;
  
  requestAnimationFrame(() => {
    element.style.opacity = '1';
  });
};