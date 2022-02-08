import { QueryContext } from '../../index.js';
import { Post } from '../../../types';

export const getPostCreatorQuery = async (post: Post, args: {}, { repository }: QueryContext) => {
  const usersRepository = repository.users;

  return usersRepository.find(post.userId);
};
