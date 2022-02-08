import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import { config as loadEnvironmentVariables } from 'dotenv';

import { createInMemoryDatabase } from './database.js';
import { schema } from './graphql/schema.js';

loadEnvironmentVariables();

(async () => {
  // Boot express
  const app: Application = express();
  const { PORT } = process.env;

  // Setup In-memory database
  const db = await createInMemoryDatabase();

  // GraphQL initialization
  app.use('/graphql', graphqlHTTP({ schema, graphiql: true, context: { db } }));

  // Start server
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
})();
