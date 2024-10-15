// config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();  // Load environment variables from .env file
// Set up Sequelize connection to MySQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  logging: false  // Set to true to log SQL queries to the console
});

module.exports = sequelize;
