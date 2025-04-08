const { pool } = require('../config/db');

const createTask = async (title, description, username) => {
  const result = await pool.query(
    'INSERT INTO tasks (title, description, username) VALUES ($1, $2, $3) RETURNING *',
    [title, description, username]
  );
  return result.rows[0];
};

const getAllTasks = async (username) => {
  const result = await pool.query(
    'SELECT * FROM tasks WHERE username = $1',
    [username]
  );
  return result.rows;
};

const getTaskById = async (id, username) => {
  const result = await pool.query(
    'SELECT * FROM tasks WHERE id = $1 AND username = $2',
    [id, username]
  );
  return result.rows[0];
};

const updateTask = async (id, title, description, username) => {
  const result = await pool.query(
    'UPDATE tasks SET title = $1, description = $2 WHERE id = $3 AND username = $4 RETURNING *',
    [title, description, id, username]
  );
  return result.rows[0];
};

const deleteTask = async (id, username) => {
  await pool.query(
    'DELETE FROM tasks WHERE id = $1 AND username = $2',
    [id, username]
  );
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
};