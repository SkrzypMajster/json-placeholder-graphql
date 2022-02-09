import { MutationContext } from '../../index.js';
import { AlbumInput } from '../../../types';

type AddAlbumMutationArgs = {
  album: AlbumInput;
};

export const addAlbumMutation = async (
  parent: {},
  { album }: AddAlbumMutationArgs,
  { repository }: MutationContext
) => {
  const albumsRepository = repository.albums;
  return await albumsRepository.insert(album);
};
