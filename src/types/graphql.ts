import { GraphQLResolveInfo } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token: Scalars["String"]["output"];
  user: User;
};

export type CreateEventInput = {
  date: Scalars["String"]["input"];
  description?: InputMaybe<Scalars["String"]["input"]>;
  location: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type CreateTicketInput = {
  eventId: Scalars["ID"]["input"];
};

export type CreateUserInput = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Event = {
  __typename?: "Event";
  createdBy: User;
  date: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  location: Scalars["String"]["output"];
  tickets: Array<Ticket>;
  title: Scalars["String"]["output"];
};

export type LoginInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createEvent: Event;
  createTicket: Ticket;
  scanTicket: Ticket;
};

export type MutationCreateEventArgs = {
  input: CreateEventInput;
};

export type MutationCreateTicketArgs = {
  input: CreateTicketInput;
};

export type MutationScanTicketArgs = {
  id: Scalars["ID"]["input"];
};

export type Query = {
  __typename?: "Query";
  event?: Maybe<Event>;
  events: Array<Event>;
  me?: Maybe<User>;
  myTickets: Array<Ticket>;
  ticket?: Maybe<Ticket>;
  tickets: Array<Ticket>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryEventArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryTicketArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

export enum Role {
  Admin = "ADMIN",
  User = "USER",
}

export type Ticket = {
  __typename?: "Ticket";
  code: Scalars["String"]["output"];
  createdAt: Scalars["String"]["output"];
  event: Event;
  id: Scalars["ID"]["output"];
  used: Scalars["Boolean"]["output"];
  user: User;
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  events: Array<Event>;
  id: Scalars["ID"]["output"];
  isGoogleAuthenticated: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  picture?: Maybe<Scalars["String"]["output"]>;
  role: Role;
  tickets: Array<Ticket>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  CreateEventInput: CreateEventInput;
  CreateTicketInput: CreateTicketInput;
  CreateUserInput: CreateUserInput;
  Event: ResolverTypeWrapper<Event>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Ticket: ResolverTypeWrapper<Ticket>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  Boolean: Scalars["Boolean"]["output"];
  CreateEventInput: CreateEventInput;
  CreateTicketInput: CreateTicketInput;
  CreateUserInput: CreateUserInput;
  Event: Event;
  ID: Scalars["ID"]["output"];
  LoginInput: LoginInput;
  Mutation: {};
  Query: {};
  String: Scalars["String"]["output"];
  Ticket: Ticket;
  User: User;
};

export type AuthPayloadResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AuthPayload"] = ResolversParentTypes["AuthPayload"]
> = {
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Event"] = ResolversParentTypes["Event"]
> = {
  createdBy?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  location?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tickets?: Resolver<Array<ResolversTypes["Ticket"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  createEvent?: Resolver<
    ResolversTypes["Event"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateEventArgs, "input">
  >;
  createTicket?: Resolver<
    ResolversTypes["Ticket"],
    ParentType,
    ContextType,
    RequireFields<MutationCreateTicketArgs, "input">
  >;
  scanTicket?: Resolver<
    ResolversTypes["Ticket"],
    ParentType,
    ContextType,
    RequireFields<MutationScanTicketArgs, "id">
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  event?: Resolver<
    Maybe<ResolversTypes["Event"]>,
    ParentType,
    ContextType,
    RequireFields<QueryEventArgs, "id">
  >;
  events?: Resolver<Array<ResolversTypes["Event"]>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  myTickets?: Resolver<
    Array<ResolversTypes["Ticket"]>,
    ParentType,
    ContextType
  >;
  ticket?: Resolver<
    Maybe<ResolversTypes["Ticket"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTicketArgs, "id">
  >;
  tickets?: Resolver<Array<ResolversTypes["Ticket"]>, ParentType, ContextType>;
  user?: Resolver<
    Maybe<ResolversTypes["User"]>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, "id">
  >;
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type TicketResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Ticket"] = ResolversParentTypes["Ticket"]
> = {
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  event?: Resolver<ResolversTypes["Event"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  used?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"]
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes["Event"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isGoogleAuthenticated?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes["Role"], ParentType, ContextType>;
  tickets?: Resolver<Array<ResolversTypes["Ticket"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ticket?: TicketResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
