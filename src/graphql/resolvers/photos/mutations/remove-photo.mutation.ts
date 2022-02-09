import { MutationContext } from '../../index.js';

type RemovePhotoMutationArgs = {
  id: number;
};

export const removePhotoMutation = async (
  parent: {},
  { id }: RemovePhotoMutationArgs,
  { repository }: MutationContext
) => repository.photos.remove(id);
