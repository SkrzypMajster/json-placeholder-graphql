import { MutationContext } from '../../index.js';
import { PostInput } from '../../../types';

type EditPostMutationArgs = {
  id: number;
  post: PostInput;
};

export const editPostMutation = async (
  parent: {},
  { id, post }: EditPostMutationArgs,
  { repository }: MutationContext
) => {
  const postsRepository = repository.posts;
  return await postsRepository.update(id, post);
};
