import { QueryContext } from '../../index.js';
import { PostsRepository } from '../../../../repository';

export const getPostsQuery = async (parent: any, args: any, { repository }: QueryContext) => {
  const postsRepository = repository.posts as PostsRepository;

  return postsRepository.getList();
};
