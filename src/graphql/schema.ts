import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLNonNull } from 'graphql';
import { Post, User } from 'integration/json-placeholder/json-placeholder.types.js';

import { PostsRepository, UsersRepository } from '../repository/index.js';
import { MutateUserInputType, MutatePostInputType, PostType, UserType } from './object-types.js';

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      description: 'List of all users',
      resolve: (_parent, _args, context) => {
        const usersRepository = context.repository.users as UsersRepository;
        return usersRepository.getList();
      },
    },
    user: {
      type: UserType,
      description: 'A single user',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_parent, args: { id: number }, context) => {
        const usersRepository = context.repository.users as UsersRepository;
        return usersRepository.find(args.id);
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      description: 'List of all posts',
      resolve: (_parent, _args, context) => {
        const postsRepository = context.repository.posts as PostsRepository;
        return postsRepository.getList();
      },
    },
    post: {
      type: PostType,
      description: 'A single post',
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (_parent, args: { id: number }, context) => {
        const postsRepository = context.repository.posts as PostsRepository;
        return postsRepository.find(args.id);
      },
    },
  }),
});

const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addUser: {
      type: UserType,
      description: 'Add a user',
      args: {
        user: { type: new GraphQLNonNull(MutateUserInputType) },
      },
      resolve: async (_user, { user }: { user: Omit<User, 'id'> }, context) => {
        const usersRepository = context.repository.users as UsersRepository;
        return await usersRepository.insert(user);
      },
    },
    editUser: {
      type: UserType,
      description: 'Edit a user',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        user: { type: new GraphQLNonNull(MutateUserInputType) },
      },
      resolve: async (_user, { id, user }: { id: number; user: Omit<User, 'id'> }, context) => {
        const usersRepository = context.repository.users as UsersRepository;
        return await usersRepository.update(id, user);
      },
    },
    removeUser: {
      type: UserType,
      description: 'Remove user',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (_user, { id }: { id: number }, context) => {
        const usersRepository = context.repository.users as UsersRepository;
        return await usersRepository.remove(id);
      },
    },
    addPost: {
      type: PostType,
      description: 'Add a post',
      args: {
        post: { type: new GraphQLNonNull(MutatePostInputType) },
      },
      resolve: async (_post, { post }: { post: Omit<Post, 'id'> }, context) => {
        const postsRepository = context.repository.posts as PostsRepository;
        return await postsRepository.insert(post);
      },
    },
    editPost: {
      type: PostType,
      description: 'Edit a post',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        post: { type: new GraphQLNonNull(MutatePostInputType) },
      },
      resolve: async (_post, { id, post }: { id: number; post: Omit<Post, 'id'> }, context) => {
        const postsRepository = context.repository.posts as PostsRepository;
        return await postsRepository.update(id, post);
      },
    },
    removePost: {
      type: PostType,
      description: 'Remove post',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: async (_user, { id }: { id: number }, context) => {
        const postsRepository = context.repository.posts as PostsRepository;
        return await postsRepository.remove(id);
      },
    },
  }),
});

export const schema = new GraphQLSchema({ query: RootQueryType, mutation: RootMutationType });
