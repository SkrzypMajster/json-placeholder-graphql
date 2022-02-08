import { MutationContext } from '../../index.js';
import { PostsRepository } from '../../../../repository/index.js';

type EditPostMutationArgs = {
  id: number;
  post: any;
};

export const editPostMutation = async (
  parent: any,
  { id, post }: EditPostMutationArgs,
  { repository }: MutationContext
) => {
  const postsRepository = repository.posts as PostsRepository;
  return await postsRepository.update(id, post);
};
