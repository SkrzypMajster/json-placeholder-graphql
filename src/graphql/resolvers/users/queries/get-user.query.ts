import { QueryContext } from '../../index.js';
import { UsersRepository } from '../../../../repository/index.js';

type GetUserQueryArgs = {
  id: number;
};

export const getUserQuery = async (parent: any, { id }: GetUserQueryArgs, { repository }: QueryContext) => {
  const usersRepository = repository.users as UsersRepository;

  return usersRepository.find(id);
};
