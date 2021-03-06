import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String'];
  geo: Coordinates;
  street: Scalars['String'];
  suite: Scalars['String'];
  zipcode: Scalars['String'];
};

export type AddressInput = {
  city: Scalars['String'];
  geo: CoordinatesInput;
  street: Scalars['String'];
  suite: Scalars['String'];
  zipcode: Scalars['String'];
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['Int'];
  photos?: Maybe<Array<Maybe<Photo>>>;
  title: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export type AlbumInput = {
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  post?: Maybe<Post>;
  postId: Scalars['Int'];
};

export type CommentInput = {
  body: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  postId: Scalars['Int'];
};

export type Company = {
  __typename?: 'Company';
  bs: Scalars['String'];
  catchPhrase: Scalars['String'];
  name: Scalars['String'];
};

export type CompanyInput = {
  bs: Scalars['String'];
  catchPhrase: Scalars['String'];
  name: Scalars['String'];
};

export type Coordinates = {
  __typename?: 'Coordinates';
  lat: Scalars['String'];
  lng: Scalars['String'];
};

export type CoordinatesInput = {
  lat: Scalars['String'];
  lng: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAlbum?: Maybe<Album>;
  addComment?: Maybe<Comment>;
  addPhoto?: Maybe<Photo>;
  addPost?: Maybe<Post>;
  addUser?: Maybe<User>;
  editAlbum?: Maybe<Album>;
  editComment?: Maybe<Comment>;
  editPhoto?: Maybe<Photo>;
  editPost?: Maybe<Post>;
  editUser?: Maybe<User>;
  removeAlbum?: Maybe<Album>;
  removeComment?: Maybe<Comment>;
  removePhoto?: Maybe<Photo>;
  removePost?: Maybe<Post>;
  removeUser?: Maybe<User>;
};

export type MutationAddAlbumArgs = {
  album: AlbumInput;
};

export type MutationAddCommentArgs = {
  comment: CommentInput;
};

export type MutationAddPhotoArgs = {
  photo: PhotoInput;
};

export type MutationAddPostArgs = {
  post: PostInput;
};

export type MutationAddUserArgs = {
  user: UserInput;
};

export type MutationEditAlbumArgs = {
  album: AlbumInput;
  id: Scalars['Int'];
};

export type MutationEditCommentArgs = {
  comment: CommentInput;
  id: Scalars['Int'];
};

export type MutationEditPhotoArgs = {
  id: Scalars['Int'];
  photo: PhotoInput;
};

export type MutationEditPostArgs = {
  id: Scalars['Int'];
  post: PostInput;
};

export type MutationEditUserArgs = {
  id: Scalars['Int'];
  user: UserInput;
};

export type MutationRemoveAlbumArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveCommentArgs = {
  id: Scalars['Int'];
};

export type MutationRemovePhotoArgs = {
  id: Scalars['Int'];
};

export type MutationRemovePostArgs = {
  id: Scalars['Int'];
};

export type MutationRemoveUserArgs = {
  id: Scalars['Int'];
};

export type Photo = {
  __typename?: 'Photo';
  album?: Maybe<Album>;
  albumId: Scalars['Int'];
  id: Scalars['Int'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type PhotoInput = {
  albumId: Scalars['Int'];
  thumbnailUrl: Scalars['String'];
  title: Scalars['String'];
  url: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['Int'];
};

export type PostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  album?: Maybe<Album>;
  albums: Array<Album>;
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  photo?: Maybe<Photo>;
  photos: Array<Photo>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryAlbumArgs = {
  id: Scalars['Int'];
};

export type QueryCommentArgs = {
  id: Scalars['Int'];
};

export type QueryPhotoArgs = {
  id: Scalars['Int'];
};

export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  address: Address;
  albums?: Maybe<Array<Maybe<Album>>>;
  company: Company;
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  phone: Scalars['String'];
  posts?: Maybe<Array<Maybe<Post>>>;
  username: Scalars['String'];
  website: Scalars['String'];
};

export type UserInput = {
  address: AddressInput;
  company: CompanyInput;
  email: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  username: Scalars['String'];
  website: Scalars['String'];
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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

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
  Address: ResolverTypeWrapper<Address>;
  AddressInput: AddressInput;
  Album: ResolverTypeWrapper<Album>;
  AlbumInput: AlbumInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Comment: ResolverTypeWrapper<Comment>;
  CommentInput: CommentInput;
  Company: ResolverTypeWrapper<Company>;
  CompanyInput: CompanyInput;
  Coordinates: ResolverTypeWrapper<Coordinates>;
  CoordinatesInput: CoordinatesInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  Photo: ResolverTypeWrapper<Photo>;
  PhotoInput: PhotoInput;
  Post: ResolverTypeWrapper<Post>;
  PostInput: PostInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  User: ResolverTypeWrapper<User>;
  UserInput: UserInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Address;
  AddressInput: AddressInput;
  Album: Album;
  AlbumInput: AlbumInput;
  Boolean: Scalars['Boolean'];
  Comment: Comment;
  CommentInput: CommentInput;
  Company: Company;
  CompanyInput: CompanyInput;
  Coordinates: Coordinates;
  CoordinatesInput: CoordinatesInput;
  Int: Scalars['Int'];
  Mutation: {};
  Photo: Photo;
  PhotoInput: PhotoInput;
  Post: Post;
  PostInput: PostInput;
  Query: {};
  String: Scalars['String'];
  User: User;
  UserInput: UserInput;
};

export type AddressResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']
> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  geo?: Resolver<ResolversTypes['Coordinates'], ParentType, ContextType>;
  street?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  suite?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zipcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AlbumResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Album'] = ResolversParentTypes['Album']
> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  photos?: Resolver<Maybe<Array<Maybe<ResolversTypes['Photo']>>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CommentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']
> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType>;
  postId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']
> = {
  bs?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  catchPhrase?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoordinatesResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Coordinates'] = ResolversParentTypes['Coordinates']
> = {
  lat?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lng?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  addAlbum?: Resolver<
    Maybe<ResolversTypes['Album']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddAlbumArgs, 'album'>
  >;
  addComment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddCommentArgs, 'comment'>
  >;
  addPhoto?: Resolver<
    Maybe<ResolversTypes['Photo']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddPhotoArgs, 'photo'>
  >;
  addPost?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddPostArgs, 'post'>
  >;
  addUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationAddUserArgs, 'user'>
  >;
  editAlbum?: Resolver<
    Maybe<ResolversTypes['Album']>,
    ParentType,
    ContextType,
    RequireFields<MutationEditAlbumArgs, 'album' | 'id'>
  >;
  editComment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<MutationEditCommentArgs, 'comment' | 'id'>
  >;
  editPhoto?: Resolver<
    Maybe<ResolversTypes['Photo']>,
    ParentType,
    ContextType,
    RequireFields<MutationEditPhotoArgs, 'id' | 'photo'>
  >;
  editPost?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<MutationEditPostArgs, 'id' | 'post'>
  >;
  editUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationEditUserArgs, 'id' | 'user'>
  >;
  removeAlbum?: Resolver<
    Maybe<ResolversTypes['Album']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveAlbumArgs, 'id'>
  >;
  removeComment?: Resolver<
    Maybe<ResolversTypes['Comment']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveCommentArgs, 'id'>
  >;
  removePhoto?: Resolver<
    Maybe<ResolversTypes['Photo']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemovePhotoArgs, 'id'>
  >;
  removePost?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemovePostArgs, 'id'>
  >;
  removeUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<MutationRemoveUserArgs, 'id'>
  >;
};

export type PhotoResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']
> = {
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType>;
  albumId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thumbnailUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PostResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']
> = {
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  album?: Resolver<Maybe<ResolversTypes['Album']>, ParentType, ContextType, RequireFields<QueryAlbumArgs, 'id'>>;
  albums?: Resolver<Array<ResolversTypes['Album']>, ParentType, ContextType>;
  comment?: Resolver<Maybe<ResolversTypes['Comment']>, ParentType, ContextType, RequireFields<QueryCommentArgs, 'id'>>;
  comments?: Resolver<Array<ResolversTypes['Comment']>, ParentType, ContextType>;
  photo?: Resolver<Maybe<ResolversTypes['Photo']>, ParentType, ContextType, RequireFields<QueryPhotoArgs, 'id'>>;
  photos?: Resolver<Array<ResolversTypes['Photo']>, ParentType, ContextType>;
  post?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<QueryPostArgs, 'id'>>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  albums?: Resolver<Maybe<Array<Maybe<ResolversTypes['Album']>>>, ParentType, ContextType>;
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  website?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: AddressResolvers<ContextType>;
  Album?: AlbumResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Company?: CompanyResolvers<ContextType>;
  Coordinates?: CoordinatesResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
