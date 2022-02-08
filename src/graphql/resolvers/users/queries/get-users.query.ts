import { QueryContext } from '../../index.js';

export const getUsersQuery = async (parent: any, args: any, { repository }: QueryContext) => {
  const usersRepository = repository.users;

  return usersRepository.getList();
};
