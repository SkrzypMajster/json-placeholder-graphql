import { MutationContext } from '../../index.js';

type AddPostMutationArgs = {
  post: any;
};

export const addPostMutation = async (parent: any, { post }: AddPostMutationArgs, { repository }: MutationContext) => {
  const postsRepository = repository.posts;
  return await postsRepository.insert(post);
};
