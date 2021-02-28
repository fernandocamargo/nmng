import get from 'lodash/get';

export const join = (...fragments) => fragments.join('.');

export const format = results =>
  results.reduce(
    ({ data, indexes }, { table_catalog, table_name, table_schema }) => {
      const symbols = {
        table: join(table_catalog, table_schema, table_name),
        schema: join(table_catalog, table_schema),
        catalog: join(table_catalog),
      };
      const catalog = get(indexes, symbols.catalog, data.length);
      const schema = get(
        indexes,
        symbols.schema,
        get(data, [catalog, 'schemas', 'length'], 0)
      );
      const table = get(
        indexes,
        symbols.table,
        get(data, [catalog, 'schemas', schema, 'tables', 'length'], 0)
      );

      return {
        data: Array.from(
          Object.assign(data, {
            [catalog]: {
              label: table_catalog,
              schemas: Array.from(
                Object.assign(get(data, [catalog, 'schemas'], []), {
                  [schema]: {
                    label: table_schema,
                    tables: Array.from(
                      Object.assign(
                        get(data, [catalog, 'schemas', schema, 'tables'], []),
                        { [table]: { label: table_name } }
                      )
                    ),
                  },
                })
              ),
            },
          })
        ),
        indexes: Object.assign(indexes, {
          [symbols.catalog]: catalog,
          [symbols.schema]: schema,
          [symbols.table]: table,
        }),
      };
    },
    { indexes: {}, data: [] }
  ).data;
