import { JsonDB, Config } from 'node-json-db';

export const db = new JsonDB(new Config('todo-db', true, true, '/'));
db.push('/tasks', []);
db.push('/categories', []);
