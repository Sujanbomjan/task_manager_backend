const taskModel = require('../models/taskModel');

const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const username = req.user.username;
    
    const newTask = await taskModel.createTask(title, description, username);
    
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const username = req.user.username;
    
    const tasks = await taskModel.getAllTasks(username);
    
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const username = req.user.username;
    
    const task = await taskModel.getTaskById(id, username);
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const username = req.user.username;
    
    // Check if task exists
    const existingTask = await taskModel.getTaskById(id, username);
    
    if (!existingTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    const updatedTask = await taskModel.updateTask(id, title, description, username);
    
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const username = req.user.username;
    
    // Check if task exists
    const existingTask = await taskModel.getTaskById(id, username);
    
    if (!existingTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    await taskModel.deleteTask(id, username);
    
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask
};