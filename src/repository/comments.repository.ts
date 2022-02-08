import { Low } from 'lowdb';

import { Database } from '../database.js';
import { Comment } from '../integration/json-placeholder/json-placeholder.types.js';

export class CommentsRepository {
  /* eslint-disable-next-line no-useless-constructor */
  constructor(private db: Low<Database>) {}

  getList(): Comment[] {
    if (!this.db.data) {
      return [];
    }

    return this.db.data.comments;
  }

  find(id: number): Comment | null {
    if (!this.db.data) {
      return null;
    }

    return this.db.data.comments.find((user) => user.id === id) || null;
  }

  async insert(payload: Omit<Comment, 'id'>): Promise<Comment> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const newComment: Comment = {
      id: this.db.data.comments.length + 1,
      ...payload,
    };

    this.db.data.comments.push(newComment);

    await this.db.write();

    return newComment;
  }

  async update(id: number, payload: Omit<Comment, 'id'>): Promise<Comment | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.comments.findIndex((user) => user.id === id);

    if (idx < 0) {
      return null;
    }

    const updatedComment: Comment = { id, ...payload };

    this.db.data.comments[idx] = updatedComment;

    await this.db.write();

    return updatedComment;
  }

  async remove(id: number): Promise<Comment | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.comments.findIndex((user) => user.id === id);

    if (idx < 0) {
      return null;
    }

    const deletedComments = this.db.data.comments.splice(idx, 1);

    await this.db.write();

    return deletedComments[0];
  }
}
