import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import { PostsRepository, UsersRepository } from '../repository';

export const CoordinatesType = new GraphQLObjectType({
  name: 'Coordinates',
  description: 'This represents the address coordinates',
  fields: () => ({
    lat: { type: new GraphQLNonNull(GraphQLString) },
    lng: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export const CoordinatesInputType = new GraphQLInputObjectType({
  name: 'CoordinatesInput',
  fields: () => ({
    lat: { type: new GraphQLNonNull(GraphQLString) },
    lng: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export const UserAddressType = new GraphQLObjectType({
  name: 'UserAddress',
  description: 'This represents the user address',
  fields: () => ({
    street: { type: new GraphQLNonNull(GraphQLString) },
    suite: { type: new GraphQLNonNull(GraphQLString) },
    city: { type: new GraphQLNonNull(GraphQLString) },
    zipcode: { type: new GraphQLNonNull(GraphQLString) },
    geo: { type: new GraphQLNonNull(CoordinatesType) },
  }),
});

export const UserAddressInputType = new GraphQLInputObjectType({
  name: 'UserAddressInput',
  fields: () => ({
    street: { type: new GraphQLNonNull(GraphQLString) },
    suite: { type: new GraphQLNonNull(GraphQLString) },
    city: { type: new GraphQLNonNull(GraphQLString) },
    zipcode: { type: new GraphQLNonNull(GraphQLString) },
    geo: { type: new GraphQLNonNull(CoordinatesInputType) },
  }),
});

export const CompanyDataType = new GraphQLObjectType({
  name: 'CompanyData',
  description: 'This represents a user`s company data',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    catchPhrase: { type: new GraphQLNonNull(GraphQLString) },
    bs: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export const CompanyDataInputType = new GraphQLInputObjectType({
  name: 'CompanyDataInput',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    catchPhrase: { type: new GraphQLNonNull(GraphQLString) },
    bs: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

export const UserType = new GraphQLObjectType({
  name: 'User',
  description: 'This represents a user',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(UserAddressType) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    website: { type: new GraphQLNonNull(GraphQLString) },
    company: { type: new GraphQLNonNull(CompanyDataType) },
    posts: {
      type: new GraphQLList(PostType),
      resolve: (user: any, _args: any, context: any) => {
        const userId = user.id;

        const postsRepository = context.repository.posts as PostsRepository;

        return postsRepository.getList({ userId });
      },
    },
  }),
});

export const MutateUserInputType = new GraphQLInputObjectType({
  name: 'AddUserPayload',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    address: { type: new GraphQLNonNull(UserAddressInputType) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
    website: { type: new GraphQLNonNull(GraphQLString) },
    company: { type: new GraphQLNonNull(CompanyDataInputType) },
  }),
});

export const PostType: any = new GraphQLObjectType({
  name: 'Post',
  description: 'This represents a post',
  fields: () => ({
    userId: { type: new GraphQLNonNull(GraphQLInt) },
    id: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
    user: {
      type: UserType,
      resolve: async (post: any, _args: any, context: any) => {
        const usersRepository = context.repository.users as UsersRepository;
        return usersRepository.find(post.userId);
      },
    },
  }),
});

export const MutatePostInputType = new GraphQLInputObjectType({
  name: 'MutatePostInput',
  fields: () => ({
    userId: { type: new GraphQLNonNull(GraphQLInt) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
  }),
});
