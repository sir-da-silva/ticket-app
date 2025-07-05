import { resolvers as ticketResolvers } from "./ticket.resolver";
import { resolvers as eventResolvers } from "./event.resolver";
import { resolvers as userResovers } from "./user.resolver";
import { mergeResolvers } from "@graphql-tools/merge";

export const resolvers = mergeResolvers([
  ticketResolvers,
  eventResolvers,
  userResovers,
]);
