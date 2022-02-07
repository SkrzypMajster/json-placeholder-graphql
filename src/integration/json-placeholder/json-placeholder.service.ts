import { ServiceClient, ServiceClientResponse } from 'perron';
import { Post, Comment, Album, Photo, Todo, User } from './json-placeholder.types.js';

export type GetPostsResponse = Omit<ServiceClientResponse, 'body'> & {
  body: Post[];
};

export type GetCommentsResponse = Omit<ServiceClientResponse, 'body'> & {
  body: Comment[];
};

export type GetAlbumsResponse = Omit<ServiceClientResponse, 'body'> & {
  body: Album[];
};

export type GetPhotosResponse = Omit<ServiceClientResponse, 'body'> & {
  body: Photo[];
};

export type GetTodosResponse = Omit<ServiceClientResponse, 'body'> & {
  body: Todo[];
};

export type GetUsersResponse = Omit<ServiceClientResponse, 'body'> & {
  body: User[];
};

export class JsonPlaceholderService {
  private jsonPlaceholderClient: ServiceClient;

  constructor() {
    const apiUrl = process.env.JSON_PLACEHOLDER_API_URL || '';

    this.jsonPlaceholderClient = new ServiceClient(apiUrl);
  }

  async getPosts() {
    const response = (await this.jsonPlaceholderClient.request({
      pathname: '/posts',
      headers: {
        'Content-Type': 'application/json',
      },
    })) as GetPostsResponse;

    return response.body;
  }

  async getComments() {
    const response = (await this.jsonPlaceholderClient.request({
      pathname: '/comments',
      headers: {
        'Content-Type': 'application/json',
      },
    })) as GetCommentsResponse;

    return response.body;
  }

  async getAlbums() {
    const response = (await this.jsonPlaceholderClient.request({
      pathname: '/albums',
      headers: {
        'Content-Type': 'application/json',
      },
    })) as GetAlbumsResponse;

    return response.body;
  }

  async getPhotos() {
    const response = (await this.jsonPlaceholderClient.request({
      pathname: '/photos',
      headers: {
        'Content-Type': 'application/json',
      },
    })) as GetPhotosResponse;

    return response.body;
  }

  async getTodos() {
    const response = (await this.jsonPlaceholderClient.request({
      pathname: '/todos',
      headers: {
        'Content-Type': 'application/json',
      },
    })) as GetTodosResponse;

    return response.body;
  }

  async getUsers() {
    const response = (await this.jsonPlaceholderClient.request({
      pathname: '/users',
      headers: {
        'Content-Type': 'application/json',
      },
    })) as GetUsersResponse;

    return response.body;
  }
}
