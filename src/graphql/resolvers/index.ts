export type MutationContext = {
  repositories: any;
};

export type QueryContext = {
  repositories: any;
};

export const createResolvers = () => {
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
