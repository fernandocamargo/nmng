import driver from 'driver';

import { format } from './helpers';

export const get = (_, response) =>
  driver('information_schema.tables')
    .select(['table_catalog', 'table_schema', 'table_name'])
    .whereNot({ table_type: 'VIEW' })
    .whereNotIn('table_schema', ['information_schema', 'pg_catalog'])
    .orderBy('table_catalog', 'ASC')
    .orderBy('table_schema', 'ASC')
    .orderBy('table_name', 'ASC')
    .then(results => response.json(format(results)));
