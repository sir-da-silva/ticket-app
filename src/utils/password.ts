import bcrypt from "bcrypt";

const hash = (password: string) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  return hashedPassword;
};
const test = (password: string, hashedPassword: string) => {
  const isValid = bcrypt.compareSync(password, hashedPassword);

  return isValid;
};

export default { hash, test };
