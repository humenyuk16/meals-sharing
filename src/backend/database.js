import knex from 'knex'
import 'dotenv/config';

// create connection
const myKnex = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
  },
  pool: { min: 2, max: 10 },
});

// Check that the connection works
myKnex.raw('SELECT 1+1 AS result')
  .then(res => {
    console.log('Connection successful', res.rows);
  })
  .catch(err => {
    console.error('Connection error', err);
  });


export default myKnex;
