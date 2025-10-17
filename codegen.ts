import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  generates: {
    "src/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        enumsAsTypes: true,
        DateTime: "Date",
        Date: "Date",
        maybeValue: "T | null",
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
