import { MutationContext } from '../../index.js';
import { UserInput } from '../../../types';

type EditUserMutationArgs = {
  id: number;
  user: UserInput;
};

export const editUserMutation = async (
  parent: {},
  { id, user }: EditUserMutationArgs,
  { repository }: MutationContext
) => {
  const usersRepository = repository.users;
  return await usersRepository.update(id, user);
};
