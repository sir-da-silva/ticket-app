import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { context } from "./graphql/context";
// import { graphqlUploadExpress } from "graphql-upload";
import dotenv from "dotenv";
// import express from "express";

dotenv.config();

// const app = express();
// app.use(graphqlUploadExpress()); // Limite la taille des fichiers uploadés

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  introspection: true, // utile en dev
  // playground: true, // active GraphQL Playground
});

// await server.start();
// server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Serveur GraphQL prêt sur ${url}`, "\n");
});
