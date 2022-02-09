import { QueryContext } from '../../index.js';

export const getAlbumsQuery = async (parent: {}, args: {}, { repository }: QueryContext) => {
  const albumsRepository = repository.albums;

  return albumsRepository.getList();
};
