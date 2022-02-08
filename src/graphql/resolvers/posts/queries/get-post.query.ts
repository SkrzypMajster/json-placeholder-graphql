import { QueryContext } from '../../index.js';
import { PostsRepository } from '../../../../repository/index.js';

type GetPostQueryArgs = {
  id: number;
};

export const getPostQuery = async (parent: any, args: GetPostQueryArgs, { repository }: QueryContext) => {
  const postsRepository = repository.posts as PostsRepository;

  return postsRepository.find(args.id);
};
