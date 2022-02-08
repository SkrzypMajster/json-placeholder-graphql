import { MutationContext } from '../../index.js';
import { UserInput } from '../../../types';

type AddUserMutationArgs = {
  user: UserInput;
};

export const addUserMutation = async (parent: {}, { user }: AddUserMutationArgs, { repository }: MutationContext) => {
  const usersRepository = repository.users;
  return await usersRepository.insert(user);
};
