import { Client } from "pg";

async function query(a) {
  const cl = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    database: "postgres",
    password: 1234,
  });
  await cl.connect();
  const result = await cl.query(a);
  await cl.end();

  return result;
}

export default {
  query: query,
};
