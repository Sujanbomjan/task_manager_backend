const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

const initDB = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE, 
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(100) NOT NULL
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) REFERENCES users(username) ON DELETE CASCADE,
        title VARCHAR(255) NOT NULL,
        description TEXT
      )
    `);

    console.log("Database created successfully!");
  } catch (err) {
    console.error("Database initialization error:", err);
  }
};

module.exports = { pool, initDB };
