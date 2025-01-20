export const validatePhone = (phone: string): boolean => {
  return /^\+?[1-9]\d{9,11}$/.test(phone);
};

export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}; 