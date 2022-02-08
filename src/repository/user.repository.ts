import { Low } from 'lowdb';

import { Database } from '../database.js';
import { User } from '../integration/json-placeholder/json-placeholder.types.js';

export class UsersRepository {
  /* eslint-disable-next-line no-useless-constructor */
  constructor(private db: Low<Database>) {}

  getList(): User[] {
    if (!this.db.data) {
      return [];
    }

    return this.db.data.users;
  }

  find(id: number): User | null {
    if (!this.db.data) {
      return null;
    }

    return this.db.data.users.find((user) => user.id === id) || null;
  }

  async insert(payload: Omit<User, 'id'>): Promise<User> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const newUser: User = {
      id: this.db.data.users.length + 1,
      ...payload,
    };

    this.db.data.users.push(newUser);

    await this.db.write();

    return newUser;
  }

  async update(id: number, payload: Omit<User, 'id'>): Promise<User | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.users.findIndex((user) => user.id === id);

    if (idx < 0) {
      return null;
    }

    const updatedUser: User = { id, ...payload };

    this.db.data.users[idx] = updatedUser;

    await this.db.write();

    return updatedUser;
  }

  async remove(id: number): Promise<User | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.users.findIndex((user) => user.id === id);

    if (idx < 0) {
      return null;
    }

    const deletedUsers = this.db.data.users.splice(idx, 1);

    await this.db.write();

    return deletedUsers[0];
  }
}
