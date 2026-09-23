
const {Pool} = require('pg');
require('dotenv').config();
 
const database = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    max: process.env.DB_MAX,
    idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT_MILLIS,
    connectionTimeoutMillis: process.env.DB_CONNECTION_TIMEOUT_MILLIS,
};
 
const pool = new Pool({
    host: database.host,
    user: database.user,
    password: database.password,
    database: database.database,
    port: database.port,
    max: database.max,
    idleTimeoutMillis: database.idleTimeoutMillis,
    connectionTimeoutMillis: database.connectionTimeoutMillis,
});
 
module.exports = pool;