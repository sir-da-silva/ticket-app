const chiffreRegex = /^[0-9]+$/;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

const isEmail = (str: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(str);
};

const isName = (str: string) => {
  const nomRegex = /^[A-Za-zÀ-ÿ\s\-']+$/u;
  return nomRegex.test(str);
};

const isValidPassword = (str: string) => {
  const passwordRegex = /^.{6,}$/;
  return passwordRegex.test(str);
};

const isStrongPassword = (str: string) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return strongPasswordRegex.test(str);
};

export { isEmail, isName, isValidPassword, isStrongPassword };
