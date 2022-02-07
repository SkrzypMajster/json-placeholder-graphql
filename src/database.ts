import { JSONFile, Low, Memory } from 'lowdb';

type Database = {};

export const createInMemoryDatabase = (): Low<Database> => {    
    const dbAdapter = process.env.NODE_ENV === 'test' ? new Memory<Database>() : new JSONFile<Database>('database.json');

    return new Low(dbAdapter);
}