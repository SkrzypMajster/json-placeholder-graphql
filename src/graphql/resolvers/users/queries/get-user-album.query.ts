import { QueryContext } from '../../index.js';
import { User } from '../../../types';

export const getUserAlbumsQuery = async (user: User, args: {}, { repository }: QueryContext) => {
  const albumsRepository = repository.albums;

  return albumsRepository.getList({ userId: user.id });
};
