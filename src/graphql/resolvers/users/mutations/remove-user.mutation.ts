import { MutationContext } from '../../index.js';
import { UsersRepository } from '../../../../repository/index.js';

type RemoveUserMutationArgs = {
  id: number;
};

export const removeUserMutation = async (
  parent: any,
  { id }: RemoveUserMutationArgs,
  { repository }: MutationContext
) => {
  const usersRepository = repository.users as UsersRepository;
  return await usersRepository.remove(id);
};
