import { QueryContext } from '../../index.js';
import { UsersRepository } from '../../../../repository/index.js';

export const getUsersQuery = async (parent: any, args: any, { repository }: QueryContext) => {
  const usersRepository = repository.users as UsersRepository;

  return usersRepository.getList();
};
