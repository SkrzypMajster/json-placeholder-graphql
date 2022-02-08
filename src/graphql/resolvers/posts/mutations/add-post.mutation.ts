import { MutationContext } from '../../index.js';
import { PostsRepository } from '../../../../repository/index.js';

type AddPostMutationArgs = {
  post: any;
};

export const addPostMutation = async (parent: any, { post }: AddPostMutationArgs, { repository }: MutationContext) => {
  const postsRepository = repository.posts as PostsRepository;
  return await postsRepository.insert(post);
};
