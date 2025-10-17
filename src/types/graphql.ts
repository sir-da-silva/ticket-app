import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Actuality = {
  __typename?: 'Actuality';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  picture: Scalars['String']['output'];
  user: User;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
  user: User;
};

export type BuyTicketInput = {
  eventId: Scalars['ID']['input'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type CompleteSignUpInput = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type CreateEventInput = {
  category: Scalars['String']['input'];
  date: Scalars['DateTime']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type CreateTicketInput = {
  buyerEmail?: InputMaybe<Scalars['String']['input']>;
  buyerName: Scalars['String']['input'];
  buyerPhone?: InputMaybe<Scalars['String']['input']>;
  eventId: Scalars['ID']['input'];
};

export type Event = {
  __typename?: 'Event';
  category: Scalars['String']['output'];
  createdBy?: Maybe<User>;
  date: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type InitSignUpInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  buyTicket?: Maybe<Ticket>;
  changePassword: Scalars['Boolean']['output'];
  completeSignUp: AuthPayload;
  createEvent?: Maybe<Scalars['ID']['output']>;
  createTicket?: Maybe<Ticket>;
  deleteEvent: Scalars['Boolean']['output'];
  deleteUser: Scalars['Boolean']['output'];
  initSignUp: Scalars['Boolean']['output'];
  scanTicket?: Maybe<Ticket>;
  updateEvent: Scalars['Boolean']['output'];
  updateUser: AuthPayload;
};


export type MutationBuyTicketArgs = {
  input: BuyTicketInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCompleteSignUpArgs = {
  input: CompleteSignUpInput;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateTicketArgs = {
  input: CreateTicketInput;
};


export type MutationDeleteEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationInitSignUpArgs = {
  input: InitSignUpInput;
};


export type MutationScanTicketArgs = {
  code: Scalars['String']['input'];
};


export type MutationUpdateEventArgs = {
  input: CreateEventInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  events: Array<Event>;
  login?: Maybe<AuthPayload>;
  me?: Maybe<User>;
  myEvents: Array<Event>;
  myTickets: Array<Ticket>;
  ticket?: Maybe<Ticket>;
  tickets: Array<Ticket>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryLoginArgs = {
  input: LoginInput;
};


export type QueryTicketArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTicketsArgs = {
  eventId: Scalars['ID']['input'];
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

export type Role =
  | 'ADMIN'
  | 'USER';

export type Ticket = {
  __typename?: 'Ticket';
  buyerEmail?: Maybe<Scalars['String']['output']>;
  buyerName?: Maybe<Scalars['String']['output']>;
  buyerPhone?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  event: Event;
  id: Scalars['ID']['output'];
  used: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  facebook?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  tiktok?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  badge: UserBadge;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  facebook?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  instagram?: Maybe<Scalars['String']['output']>;
  isGoogleAuthenticated: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  role: Role;
  tiktok?: Maybe<Scalars['String']['output']>;
  walletBalance?: Maybe<Scalars['Float']['output']>;
  whatsapp?: Maybe<Scalars['String']['output']>;
};

export type UserBadge =
  | 'BRONZE'
  | 'GOLD'
  | 'SILVER';



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Actuality: ResolverTypeWrapper<Actuality>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  BuyTicketInput: BuyTicketInput;
  ChangePasswordInput: ChangePasswordInput;
  CompleteSignUpInput: CompleteSignUpInput;
  CreateEventInput: CreateEventInput;
  CreateTicketInput: CreateTicketInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Event: ResolverTypeWrapper<Event>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  InitSignUpInput: InitSignUpInput;
  LoginInput: LoginInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Role: Role;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Ticket: ResolverTypeWrapper<Ticket>;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  UserBadge: UserBadge;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Actuality: Actuality;
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean']['output'];
  BuyTicketInput: BuyTicketInput;
  ChangePasswordInput: ChangePasswordInput;
  CompleteSignUpInput: CompleteSignUpInput;
  CreateEventInput: CreateEventInput;
  CreateTicketInput: CreateTicketInput;
  DateTime: Scalars['DateTime']['output'];
  Event: Event;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  InitSignUpInput: InitSignUpInput;
  LoginInput: LoginInput;
  Mutation: {};
  Query: {};
  String: Scalars['String']['output'];
  Ticket: Ticket;
  UpdateUserInput: UpdateUserInput;
  User: User;
};

export type ActualityResolvers<ContextType = any, ParentType extends ResolversParentTypes['Actuality'] = ResolversParentTypes['Actuality']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  picture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picture?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  buyTicket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<MutationBuyTicketArgs, 'input'>>;
  changePassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'input'>>;
  completeSignUp?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationCompleteSignUpArgs, 'input'>>;
  createEvent?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType, RequireFields<MutationCreateEventArgs, 'input'>>;
  createTicket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<MutationCreateTicketArgs, 'input'>>;
  deleteEvent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteEventArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteUserArgs, 'id'>>;
  initSignUp?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationInitSignUpArgs, 'input'>>;
  scanTicket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<MutationScanTicketArgs, 'code'>>;
  updateEvent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUpdateEventArgs, 'input'>>;
  updateUser?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['AuthPayload']>, ParentType, ContextType, RequireFields<QueryLoginArgs, 'input'>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  myEvents?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  myTickets?: Resolver<Array<ResolversTypes['Ticket']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<QueryTicketArgs, 'id'>>;
  tickets?: Resolver<Array<ResolversTypes['Ticket']>, ParentType, ContextType, RequireFields<QueryTicketsArgs, 'eventId'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type TicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ticket'] = ResolversParentTypes['Ticket']> = {
  buyerEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buyerName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  buyerPhone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['Event'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  used?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  badge?: Resolver<ResolversTypes['UserBadge'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isGoogleAuthenticated?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  tiktok?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  walletBalance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  whatsapp?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Actuality?: ActualityResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Event?: EventResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Ticket?: TicketResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

