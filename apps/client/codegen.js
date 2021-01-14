// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

module.exports = {
  schema: [
    {
      'http://localhost:8080/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  // documents: ['./apps/client/src/app/**/*.tsx', './apps/client/src/app/**/*.ts'],
  overwrite: true,
  generates: {
    './apps/client/src/graphql/types.ts': {
      plugins: ['typescript', 'typescript-operations'],
    },
    './apps/client/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
