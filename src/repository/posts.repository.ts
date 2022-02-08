import { Low } from 'lowdb';

import { Database } from '../database.js';
import { Post } from '../integration/json-placeholder/json-placeholder.types.js';

export class PostsRepository {
  /* eslint-disable-next-line no-useless-constructor */
  constructor(private db: Low<Database>) {}

  getList(): Post[] {
    if (!this.db.data) {
      return [];
    }

    return this.db.data.posts;
  }

  find(id: number): Post | null {
    if (!this.db.data) {
      return null;
    }

    return this.db.data.posts.find((user) => user.id === id) || null;
  }

  async insert(payload: Omit<Post, 'id'>): Promise<Post> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const newPost: Post = {
      id: this.db.data.posts.length + 1,
      ...payload,
    };

    this.db.data.posts.push(newPost);

    await this.db.write();

    return newPost;
  }

  async update(id: number, payload: Omit<Post, 'id'>): Promise<Post | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.posts.findIndex((user) => user.id === id);

    if (idx < 0) {
      return null;
    }

    const updatedPost: Post = { id, ...payload };

    this.db.data.posts[idx] = updatedPost;

    await this.db.write();

    return updatedPost;
  }

  async remove(id: number): Promise<Post | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.posts.findIndex((user) => user.id === id);

    if (idx < 0) {
      return null;
    }

    const deletedPosts = this.db.data.posts.splice(idx, 1);

    await this.db.write();

    return deletedPosts[0];
  }
}
