import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  const colors = ['#facc15', '#4299E1']; // Yellow and Blue brand colors

  (function frame() {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};