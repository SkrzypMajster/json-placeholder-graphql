import { QueryContext } from '../../index.js';

type GetPhotoQueryArgs = {
  id: number;
};

export const getPhotoQuery = async (parent: {}, { id }: GetPhotoQueryArgs, { repository }: QueryContext) =>
  repository.photos.find(id);
