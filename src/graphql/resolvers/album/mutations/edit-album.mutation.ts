import { MutationContext } from '../../index.js';
import { AlbumInput } from '../../../types';

type EditAlbumMutationArgs = {
  id: number;
  album: AlbumInput;
};

export const editAlbumMutation = async (
  parent: {},
  { id, album }: EditAlbumMutationArgs,
  { repository }: MutationContext
) => {
  const albumsRepository = repository.albums;
  return await albumsRepository.update(id, album);
};
