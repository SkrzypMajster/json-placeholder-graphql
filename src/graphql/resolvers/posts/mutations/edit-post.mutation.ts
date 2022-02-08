import { MutationContext } from '../../index.js';

type EditPostMutationArgs = {
  id: number;
  post: any;
};

export const editPostMutation = async (
  parent: any,
  { id, post }: EditPostMutationArgs,
  { repository }: MutationContext
) => {
  const postsRepository = repository.posts;
  return await postsRepository.update(id, post);
};
