import { Low } from 'lowdb';

import { Database } from '../database.js';
import { Album } from '../integration/json-placeholder/json-placeholder.types.js';

type AlbumsListFilters = {
  userId: number;
};

export class AlbumsRepository {
  /* eslint-disable-next-line no-useless-constructor */
  constructor(private db: Low<Database>) {}

  getList(filters: AlbumsListFilters | null = null): Album[] {
    if (!this.db.data) {
      return [];
    }

    const albums = this.db.data.albums;

    if (filters?.userId) {
      return albums.filter((album) => album.userId === filters.userId);
    }

    return albums;
  }

  find(id: number): Album | null {
    if (!this.db.data) {
      return null;
    }

    return this.db.data.albums.find((user) => user.id === id) || null;
  }

  async insert(payload: Omit<Album, 'id'>): Promise<Album> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const newAlbum: Album = {
      id: this.db.data.albums.length + 1,
      ...payload,
    };

    this.db.data.albums.push(newAlbum);

    await this.db.write();

    return newAlbum;
  }

  async update(id: number, payload: Omit<Album, 'id'>): Promise<Album | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.albums.findIndex((user) => user.id === id);

    if (idx < 0) {
      return null;
    }

    const updatedAlbum: Album = { id, ...payload };

    this.db.data.albums[idx] = updatedAlbum;

    await this.db.write();

    return updatedAlbum;
  }

  async remove(id: number): Promise<Album | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.albums.findIndex((user) => user.id === id);

    if (idx < 0) {
      return null;
    }

    const deletedAlbums = this.db.data.albums.splice(idx, 1);

    await this.db.write();

    return deletedAlbums[0];
  }
}
