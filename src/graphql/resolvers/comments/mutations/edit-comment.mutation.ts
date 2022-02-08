import { MutationContext } from '../../index.js';
import { CommentInput } from '../../../types';

type EditCommentMutationArgs = {
  id: number;
  comment: CommentInput;
};

export const editCommentMutation = async (
  parent: {},
  { id, comment }: EditCommentMutationArgs,
  { repository }: MutationContext
) => {
  const commentsRepository = repository.comments;
  return await commentsRepository.update(id, comment);
};
