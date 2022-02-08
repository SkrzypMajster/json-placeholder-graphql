import { QueryContext } from '../../index.js';

export const getUsersQuery = async (parent: {}, args: {}, { repository }: QueryContext) => {
  const usersRepository = repository.users;

  return usersRepository.getList();
};
