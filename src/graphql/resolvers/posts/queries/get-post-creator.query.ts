import { QueryContext } from '../../index.js';
import { UsersRepository } from '../../../../repository/index.js';
import { Post } from '../../../types';

export const getPostCreatorQuery = async (post: Post, args: any, { repository }: QueryContext) => {
  const usersRepository = repository.users as UsersRepository;

  return usersRepository.find(post.userId);
};
