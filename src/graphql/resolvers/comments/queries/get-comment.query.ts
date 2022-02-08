import { QueryContext } from '../../index.js';

type GetCommentQueryArgs = {
  id: number;
};

export const getCommentQuery = async (parent: {}, { id }: GetCommentQueryArgs, { repository }: QueryContext) => {
  const commentsRepository = repository.comments;

  return commentsRepository.find(id);
};
