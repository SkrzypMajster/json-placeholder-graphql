import { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLNonNull } from 'graphql';
import { User } from 'integration/json-placeholder/json-placeholder.types.js';

import { UsersRepository } from '../repository/user.repository.js';
import { AddUserPayloadType, UserType } from './object-types.js';

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
        user: { type: new GraphQLNonNull(AddUserPayloadType) },
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
        user: { type: new GraphQLNonNull(AddUserPayloadType) },
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
  }),
});

export const schema = new GraphQLSchema({ query: RootQueryType, mutation: RootMutationType });
