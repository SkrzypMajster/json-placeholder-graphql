import { MutationContext } from '../../index.js';

type RemoveUserMutationArgs = {
  id: number;
};

export const removeUserMutation = async (
  parent: any,
  { id }: RemoveUserMutationArgs,
  { repository }: MutationContext
) => {
  const usersRepository = repository.users;
  return await usersRepository.remove(id);
};
