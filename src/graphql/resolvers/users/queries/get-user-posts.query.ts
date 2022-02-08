import { QueryContext } from '../../index.js';
import { User } from '../../../types';

export const getUserPostsQuery = async (user: User, args: {}, { repository }: QueryContext) => {
  const postsRepository = repository.posts;

  return postsRepository.getList({ userId: user.id });
};
