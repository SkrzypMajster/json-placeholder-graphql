import { QueryContext } from '../../index.js';
import { Album } from '../../../types';

export const getAlbumUserQuery = async (album: Album, args: {}, { repository }: QueryContext) => {
  const usersRepository = repository.users;

  return usersRepository.find(album.userId);
};
