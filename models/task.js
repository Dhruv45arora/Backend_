// models/task.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

// Define the Task model
const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }
}, {
  timestamps: true  // Enable createdAt/updatedAt fields automatically
});

module.exports = Task;
