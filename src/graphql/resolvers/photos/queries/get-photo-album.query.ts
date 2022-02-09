import { QueryContext } from '../../index.js';
import { Photo } from '../../../types';

export const getPhotoAlbumQuery = async (photo: Photo, args: {}, { repository }: QueryContext) =>
  repository.albums.find(photo.albumId);
