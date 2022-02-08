import { MutationContext } from '../../index.js';
import { UsersRepository } from '../../../../repository/index.js';

type AddUserMutationArgs = {
  user: any;
};

export const addUserMutation = async (parent: any, { user }: AddUserMutationArgs, { repository }: MutationContext) => {
  const usersRepository = repository.users as UsersRepository;
  return await usersRepository.insert(user);
};
