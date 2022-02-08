import { QueryContext } from '../../index.js';

export const getPostsQuery = async (parent: {}, args: {}, { repository }: QueryContext) => {
  const postsRepository = repository.posts;

  return postsRepository.getList();
};
