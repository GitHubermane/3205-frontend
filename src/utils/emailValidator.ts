export const emailValidator = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
