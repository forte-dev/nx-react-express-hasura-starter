// eslint-disable-next-line no-undef
const connection_url = process.env.DATABASE_URL;

export default {
  client: 'pg',
  connection: connection_url,
};
