import { QueryContext } from '../../index.js';

type GetPostQueryArgs = {
  id: number;
};

export const getPostQuery = async (parent: {}, args: GetPostQueryArgs, { repository }: QueryContext) => {
  const postsRepository = repository.posts;

  return postsRepository.find(args.id);
};
