import { QueryContext } from '../../index.js';

export const getCommentsQuery = async (parent: {}, args: {}, { repository }: QueryContext) => {
  const commentsRepository = repository.comments;

  return commentsRepository.getList();
};
