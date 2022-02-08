import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { config as loadEnvironmentVariables } from 'dotenv';

import { createInMemoryDatabase, createRepository } from './database.js';
import { schema } from './graphql/schema.js';

loadEnvironmentVariables();

(async () => {
  // Boot express
  const app: Application = express();
  const { PORT } = process.env;

  // Setup In-memory database
  const db = await createInMemoryDatabase();

  const repository = createRepository(db);

  // GraphQL initialization
  app.use('/graphql', graphqlHTTP({ schema, graphiql: true, context: { repository } }));

  // Start server
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
})();
