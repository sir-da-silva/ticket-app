import { appendFileSync } from "fs";

/** Save an error to /errors.log file */
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

/** Returns an error that can be shown to the user */
const safeError = (msg: string) => {
  return new Error(`§${msg}`);
};

/** Parse error to return a safe error or "500 - Server error" */
const errorParser = (err: Error) => {
  if (err.message.startsWith("§")) {
    return new Error(err.message.slice(1));
  } else {
    logError(err);
    return new Error("500 - Erreur du serveur !");
  }
};

export { logError, safeError };
export default errorParser;
