const { pool } = require('../config/db');
const bcrypt = require('bcrypt');

const getUserByUsername = async (username) => {
  const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
  return result.rows[0];
};

const getUserByUsernameOrEmail = async (username, email) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE username = $1 OR email = $2',
    [username, email]
  );
  return result.rows[0];
};

const createUser = async (email, username, password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  
  await pool.query(
    'INSERT INTO users (email, username, password) VALUES ($1, $2, $3)',
    [email, username, hashedPassword]
  );
};

module.exports = {
  getUserByUsername,
  getUserByUsernameOrEmail,
  createUser
};