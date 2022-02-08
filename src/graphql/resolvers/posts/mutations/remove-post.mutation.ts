import { MutationContext } from '../../index.js';

type RemovePostMutationArgs = {
  id: number;
};

export const removePostMutation = async (
  parent: {},
  { id }: RemovePostMutationArgs,
  { repository }: MutationContext
) => {
  const postsRepository = repository.posts;
  return await postsRepository.remove(id);
};
