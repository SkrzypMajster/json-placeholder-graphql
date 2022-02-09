import { MutationContext } from '../../index.js';

type RemoveAlbumMutationArgs = {
  id: number;
};

export const removeAlbumMutation = async (
  parent: {},
  { id }: RemoveAlbumMutationArgs,
  { repository }: MutationContext
) => {
  const albumsRepository = repository.albums;
  return await albumsRepository.remove(id);
};
