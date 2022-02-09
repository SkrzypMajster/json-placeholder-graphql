import { QueryContext } from '../../index.js';

export const getPhotosQuery = async (parent: {}, args: {}, { repository }: QueryContext) => repository.photos.getList();
