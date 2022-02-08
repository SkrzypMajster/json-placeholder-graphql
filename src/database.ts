import { JSONFile, Low, Memory } from 'lowdb';

import { JsonPlaceholderService } from './integration/json-placeholder/json-placeholder.service.js';
import { Album, Photo, Post, Todo, User, Comment } from './integration/json-placeholder/json-placeholder.types.js';
import { UsersRepository, PostsRepository } from './repository/index.js';

export type Database = {
  albums: Album[];
  comments: Comment[];
  users: User[];
  photos: Photo[];
  posts: Post[];
  todos: Todo[];
};

export const createInMemoryDatabase = async (): Promise<Low<Database>> => {
  const dbAdapter = process.env.NODE_ENV === 'test' ? new Memory<Database>() : new JSONFile<Database>('database.json');

  const db = new Low(dbAdapter);

  await db.read();

  if (!db.data) {
    const jsonPlaceholder = new JsonPlaceholderService();

    const posts = await jsonPlaceholder.getPosts();
    const comments = await jsonPlaceholder.getComments();
    const albums = await jsonPlaceholder.getAlbums();
    const photos = await jsonPlaceholder.getPhotos();
    const todos = await jsonPlaceholder.getTodos();
    const users = await jsonPlaceholder.getUsers();

    db.data = { posts, comments, albums, photos, todos, users };

    await db.write();
  }

  return db;
};

export type Repositories = {
  users: UsersRepository;
  posts: PostsRepository;
};

export const createRepository = (db: Low<Database>): Repositories => ({
  users: new UsersRepository(db),
  posts: new PostsRepository(db),
});
