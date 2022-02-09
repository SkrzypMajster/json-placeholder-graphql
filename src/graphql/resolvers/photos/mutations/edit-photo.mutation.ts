import { MutationContext } from '../../index.js';
import { PhotoInput } from '../../../types';

type EditPhotoMutationArgs = {
  id: number;
  photo: PhotoInput;
};

export const editPhotoMutation = async (
  parent: {},
  { id, photo }: EditPhotoMutationArgs,
  { repository }: MutationContext
) => repository.photos.update(id, photo);
