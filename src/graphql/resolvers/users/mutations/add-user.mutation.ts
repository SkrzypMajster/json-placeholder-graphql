import { MutationContext } from '../../index.js';

type AddUserMutationArgs = {
  user: any;
};

export const addUserMutation = async (parent: any, { user }: AddUserMutationArgs, { repository }: MutationContext) => {
  const usersRepository = repository.users;
  return await usersRepository.insert(user);
};
