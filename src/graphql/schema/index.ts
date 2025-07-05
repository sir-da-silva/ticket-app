import { mergeTypeDefs } from "@graphql-tools/merge";
import fs from "fs";
import path from "path";

const files = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith(".graphql"));

const typeDefsArray = files.map((file) => {
  const filePath = path.join(__dirname, file);
  return fs.readFileSync(filePath, "utf8");
});

export const typeDefs = mergeTypeDefs(typeDefsArray);

export default typeDefs;
