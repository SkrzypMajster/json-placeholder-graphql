import { MutationContext } from '../../index.js';

type RemoveCommentMutationArgs = {
  id: number;
};

export const removeCommentMutation = async (
  parent: {},
  { id }: RemoveCommentMutationArgs,
  { repository }: MutationContext
) => {
  const commentsRepository = repository.comments;
  return await commentsRepository.remove(id);
};
