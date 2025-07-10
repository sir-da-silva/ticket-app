import { appendFileSync } from "fs";

const logError = (err: Error) => {
  const date = new Date().toISOString();
  const row =
    `[${date}] Message: ${err?.message}` +
    `\n` +
    `Stack: ${err?.stack}` +
    `\n\n`;

  try {
    appendFileSync("errors.log", row);
  } catch (e) {
    console.error(e);
  }
};

const safeError = (msg: string) => {
  return new Error(`§${msg}`);
};

const errorParser = (err: Error) => {
  logError(err);

  return err.message.startsWith("§")
    ? new Error(err.message.slice(1))
    : new Error("500 - Server error");
};
export { logError, safeError };
export default errorParser;
