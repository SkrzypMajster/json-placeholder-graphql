import { MutationContext } from '../../index.js';
import { UsersRepository } from '../../../../repository/index.js';

type EditUserMutationArgs = {
  id: number;
  user: any;
};

export const editUserMutation = async (
  parent: any,
  { id, user }: EditUserMutationArgs,
  { repository }: MutationContext
) => {
  const usersRepository = repository.users as UsersRepository;
  return await usersRepository.update(id, user);
};
