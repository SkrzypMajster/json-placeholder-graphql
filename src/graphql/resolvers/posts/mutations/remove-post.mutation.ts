import { MutationContext } from '../../index.js';
import { PostsRepository } from '../../../../repository/index.js';

type RemovePostMutationArgs = {
  id: number;
};

export const removePostMutation = async (
  parent: any,
  { id }: RemovePostMutationArgs,
  { repository }: MutationContext
) => {
  const postsRepository = repository.posts as PostsRepository;
  return await postsRepository.remove(id);
};
