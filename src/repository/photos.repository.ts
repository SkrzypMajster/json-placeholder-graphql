import { Low } from 'lowdb';

import { Database } from '../database.js';
import { Photo } from '../integration/json-placeholder/json-placeholder.types.js';

type PhotosListFilters = {
  albumId: number;
};

export class PhotosRepository {
  /* eslint-disable-next-line no-useless-constructor */
  constructor(private db: Low<Database>) {}

  getList(filters: PhotosListFilters | null = null): Photo[] {
    if (!this.db.data) {
      return [];
    }

    const photos = this.db.data.photos;

    if (filters?.albumId) {
      return photos.filter((photo) => photo.albumId === filters.albumId);
    }

    return photos;
  }

  find(id: number): Photo | null {
    if (!this.db.data) {
      return null;
    }

    return this.db.data.photos.find((photo) => photo.id === id) || null;
  }

  async insert(payload: Omit<Photo, 'id'>): Promise<Photo> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const newPhoto: Photo = {
      id: this.db.data.photos.length + 1,
      ...payload,
    };

    this.db.data.photos.push(newPhoto);

    await this.db.write();

    return newPhoto;
  }

  async update(id: number, payload: Omit<Photo, 'id'>): Promise<Photo | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.photos.findIndex((photo) => photo.id === id);

    if (idx < 0) {
      return null;
    }

    const updatedPhoto: Photo = { id, ...payload };

    this.db.data.photos[idx] = updatedPhoto;

    await this.db.write();

    return updatedPhoto;
  }

  async remove(id: number): Promise<Photo | null> {
    if (!this.db.data) {
      throw new Error('Something went wrong with connection to the database. Please try again later!');
    }

    const idx = this.db.data.photos.findIndex((photo) => photo.id === id);

    if (idx < 0) {
      return null;
    }

    const deletedPhotos = this.db.data.photos.splice(idx, 1);

    await this.db.write();

    return deletedPhotos[0];
  }
}
