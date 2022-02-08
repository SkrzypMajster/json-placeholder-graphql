import { QueryContext } from '../../index.js';
import { PostsRepository } from '../../../../repository/index.js';
import { User } from '../../../types';

export const getUserPostsQuery = async (user: User, args: any, { repository }: QueryContext) => {
  const postsRepository = repository.posts as PostsRepository;

  return postsRepository.getList({ userId: user.id });
};
