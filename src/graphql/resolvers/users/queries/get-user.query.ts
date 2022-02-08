import { QueryContext } from '../../index.js';

type GetUserQueryArgs = {
  id: number;
};

export const getUserQuery = async (parent: {}, { id }: GetUserQueryArgs, { repository }: QueryContext) => {
  const usersRepository = repository.users;

  return usersRepository.find(id);
};
