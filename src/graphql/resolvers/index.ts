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
import { getCommentQuery } from './comments/queries/get-comment.query.js';
import { getCommentsQuery } from './comments/queries/get-comments.query.js';
import { getCommentPostQuery } from './comments/queries/get-comment-post.query.js';
import { addCommentMutation } from './comments/mutations/add-comment.mutation.js';
import { editCommentMutation } from './comments/mutations/edit-comment.mutation.js';
import { removeCommentMutation } from './comments/mutations/remove-comment.mutation.js';
import { addAlbumMutation } from './album/mutations/add-album.mutation.js';
import { editAlbumMutation } from './album/mutations/edit-album.mutation.js';
import { removeAlbumMutation } from './album/mutations/remove-album.mutation.js';
import { getAlbumUserQuery } from './album/queries/get-album-user.query.js';
import { getAlbumQuery } from './album/queries/get-album.query.js';
import { getAlbumsQuery } from './album/queries/get-albums.query.js';
import { getUserAlbumsQuery } from './users/queries/get-user-album.query.js';

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
    comment: getCommentQuery,
    comments: getCommentsQuery,
    album: getAlbumQuery,
    albums: getAlbumsQuery,
  },
  Mutation: {
    // GRAPHQL_MUTATIONS
    addUser: addUserMutation,
    editUser: editUserMutation,
    removeUser: removeUserMutation,
    addPost: addPostMutation,
    editPost: editPostMutation,
    removePost: removePostMutation,
    addComment: addCommentMutation,
    editComment: editCommentMutation,
    removeComment: removeCommentMutation,
    addAlbum: addAlbumMutation,
    editAlbum: editAlbumMutation,
    removeAlbum: removeAlbumMutation,
  },
  User: {
    posts: getUserPostsQuery,
    albums: getUserAlbumsQuery,
  },
  Post: {
    user: getPostCreatorQuery,
  },
  Comment: {
    post: getCommentPostQuery,
  },
  Album: {
    user: getAlbumUserQuery,
  },
});
