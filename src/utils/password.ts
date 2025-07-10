import bcrypt from "bcrypt";

const hash = (password: string) => {
  // const salt = bcrypt.genSaltSync(10);
  // const hashedPassword = bcrypt.hashSync(password, salt);
  return "";
};

const test = (password: string, hashedPassword: string) => {
  // const isValid =  bcrypt.compareSync(password, hashedPassword)
  return "";
};

export default { hash, test };
