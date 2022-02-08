import { Resolvers } from '../types/index.js';

export type MutationContext = {
  repositories: any;
};

export type QueryContext = {
  repositories: any;
};

export const createResolvers = (): Resolvers => {
  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      // GRAPHQL_QUERIES
      hello: () => 'Hi!',
    },
    /* Mutation: {
      // GRAPHQL_MUTATIONS
    }, */
  };

  return resolvers;
};
