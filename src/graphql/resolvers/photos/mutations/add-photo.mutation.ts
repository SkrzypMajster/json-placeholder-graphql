import { MutationContext } from '../../index.js';
import { PhotoInput } from '../../../types';

type AddPhotoMutationArgs = {
  photo: PhotoInput;
};

export const addPhotoMutation = async (parent: {}, { photo }: AddPhotoMutationArgs, { repository }: MutationContext) =>
  repository.photos.insert(photo);
