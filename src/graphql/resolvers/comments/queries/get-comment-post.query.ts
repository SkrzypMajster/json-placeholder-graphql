import { QueryContext } from '../../index.js';
import { Comment } from '../../../types';

export const getCommentPostQuery = async (comment: Comment, args: {}, { repository }: QueryContext) => {
  const postsRepository = repository.posts;

  return postsRepository.find(comment.postId);
};
