import { useCallback } from 'react';

interface NotificationOptions {
  message: string;
  duration?: number;
  type?: 'success' | 'error' | 'info';
}

export const useNotification = () => {
  const showNotification = useCallback(({ message, duration = 3000, type = 'success' }: NotificationOptions) => {
    const notification = document.createElement('div');
    
    const baseStyles = 'fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-500 opacity-0 translate-y-[-20px] z-50';
    const typeStyles = {
      success: 'bg-yellow-400 text-blue-900',
      error: 'bg-red-500 text-white',
      info: 'bg-blue-500 text-white'
    };
    
    notification.className = `${baseStyles} ${typeStyles[type]}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0)';
    });
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-20px)';
      setTimeout(() => notification.remove(), 500);
    }, duration);
  }, []);
  
  return { showNotification };
};