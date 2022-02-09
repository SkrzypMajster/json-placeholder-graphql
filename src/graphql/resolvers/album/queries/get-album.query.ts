import { QueryContext } from '../../index.js';

type GetAlbumQueryArgs = {
  id: number;
};

export const getAlbumQuery = async (parent: {}, { id }: GetAlbumQueryArgs, { repository }: QueryContext) => {
  const albumsRepository = repository.albums;

  return albumsRepository.find(id);
};
