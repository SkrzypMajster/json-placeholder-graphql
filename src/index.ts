import express, { Application } from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { config as loadEnvironmentVariables } from 'dotenv';
import { readFileSync } from 'fs';
import { resolve } from 'path';

import { createInMemoryDatabase, createRepository } from './database.js';
import { createResolvers } from './graphql/resolvers/index.js';

loadEnvironmentVariables();

(async () => {
  // Boot express
  const app: Application = express();
  const { PORT } = process.env;

  // Setup In-memory database
  const db = await createInMemoryDatabase();

  const repository = createRepository(db);

  // GraphQL initialization
  const graphQLSchema = readFileSync(resolve('graphql', 'schema.gql'), 'utf8');
  const typeDefs = gql(graphQLSchema);
  const server = new ApolloServer({
    typeDefs,
    resolvers: createResolvers(),
    context: { repository },
  });

  await server.start();

  server.applyMiddleware({ app });

  // Start server
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
})();
