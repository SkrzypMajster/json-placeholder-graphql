import { MutationContext } from '../../index.js';
import { CommentInput } from '../../../types';

type AddCommentMutationArgs = {
  comment: CommentInput;
};

export const addCommentMutation = async (
  parent: {},
  { comment }: AddCommentMutationArgs,
  { repository }: MutationContext
) => {
  const commentsRepository = repository.comments;
  return await commentsRepository.insert(comment);
};
