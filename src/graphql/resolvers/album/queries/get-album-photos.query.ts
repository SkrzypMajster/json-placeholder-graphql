import { Album } from '../../../types';
import { QueryContext } from '../../index';

export const getAlbumPhotosQuery = async (album: Album, args: {}, { repository }: QueryContext) =>
  repository.photos.getList({ albumId: album.id });
