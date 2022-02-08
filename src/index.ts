import express, { Application, Request, Response, NextFunction } from 'express';
import { config as loadEnvironmentVariables } from 'dotenv';
import { createInMemoryDatabase } from './database.js';

loadEnvironmentVariables();

(async () => {
  // Boot express
  const app: Application = express();
  const { PORT } = process.env;

  // Setup In-memory database
  const db = await createInMemoryDatabase();

  // Application routing
  app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: 'Hello from Ornio AS' });
  });

  // Start server
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
})();
