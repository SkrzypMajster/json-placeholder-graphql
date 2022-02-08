import { MutationContext } from '../../index.js';
import { PostInput } from '../../../types';

type AddPostMutationArgs = {
  post: PostInput;
};

export const addPostMutation = async (parent: {}, { post }: AddPostMutationArgs, { repository }: MutationContext) => {
  const postsRepository = repository.posts;
  return await postsRepository.insert(post);
};
