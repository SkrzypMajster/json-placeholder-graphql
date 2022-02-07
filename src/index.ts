import express, { Application, Request, Response } from 'express';
import { config as loadEnvironmentVariables } from 'dotenv';

loadEnvironmentVariables();

// Boot express
const app: Application = express();
const { PORT } = process.env;

// Application routing
app.use('/', (_req: Request, res: Response ) => {
    res.status(200).send({data: 'Hello World!'});
});

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));