import { QueryContext } from '../../index.js';

export const getPostsQuery = async (parent: any, args: any, { repository }: QueryContext) => {
  const postsRepository = repository.posts;

  return postsRepository.getList();
};
