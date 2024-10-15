// app.js
const express = require('express');
const { User, Task } = require('./models');  // Import models
const sequelize = require('./db');     // Sequelize connection

const app = express();
app.use(express.json());  // Middleware to parse JSON requests

// Test database connection
sequelize.authenticate()
  .then(() => console.log('Database connected successfully!'))
  .catch(err => console.error('Database connection error:', err));

// Sync the database and create tables if they don't exist
sequelize.sync()
  .then(() => console.log('Tables synced with the database!'))
  .catch(err => console.error('Error syncing tables:', err));

// Example route: Create a new user
app.post('/users', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }).then(user => {
    res.json(user);
  }).catch(err => {
    res.status(500).json({ error: err.message });
  });
});

// Example route: Fetch all tasks
app.get('/tasks', (req, res) => {
  Task.findAll().then(tasks => {
    res.json(tasks);
  }).catch(err => {
    res.status(500).json({ error: err.message });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
