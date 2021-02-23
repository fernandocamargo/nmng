import knex from 'knex';

import {
  DB_CLIENT as client,
  DB_HOST as host,
  DB_NAME as database,
  DB_PASS as password,
  DB_USER as user,
} from './constants';

export default knex({ connection: { database, host, password, user }, client });
