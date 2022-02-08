import { Resolvers } from '../types/index.js';
import { Repositories } from '../../database.js';
import { getUserQuery } from './users/queries/get-user.query.js';
import { getUsersQuery } from './users/queries/get-users.query.js';
import { getPostQuery } from './posts/queries/get-post.query.js';
import { getPostsQuery } from './posts/queries/get-posts.query.js';
import { addUserMutation } from './users/mutations/add-user.mutation.js';
import { editUserMutation } from './users/mutations/edit-user.mutation.js';
import { removeUserMutation } from './users/mutations/remove-user.mutation.js';
import { addPostMutation } from './posts/mutations/add-post.mutation.js';
import { editPostMutation } from './posts/mutations/edit-post.mutation.js';
import { removePostMutation } from './posts/mutations/remove-post.mutation.js';
import { getUserPostsQuery } from './users/queries/get-user-posts.query.js';
import { getPostCreatorQuery } from './posts/queries/get-post-creator.query.js';

export type MutationContext = {
  repository: Repositories;
};

export type QueryContext = {
  repository: Repositories;
};

// Provide resolver functions for your schema fields
export const createResolvers = (): Resolvers => ({
  Query: {
    // GRAPHQL_QUERIES
    user: getUserQuery,
    users: getUsersQuery,
    post: getPostQuery,
    posts: getPostsQuery,
  },
  Mutation: {
    // GRAPHQL_MUTATIONS
    addUser: addUserMutation,
    editUser: editUserMutation,
    removeUser: removeUserMutation,
    addPost: addPostMutation,
    editPost: editPostMutation,
    removePost: removePostMutation,
  },
  User: {
    posts: getUserPostsQuery,
  },
  Post: {
    user: getPostCreatorQuery,
  },
});
