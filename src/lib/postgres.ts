const { Sequelize } = require('sequelize');
const  pg  = require('pg');

const sequelize = new Sequelize('postgres', 'user', 'user', {
  host: 'localhost',
  dialect: 'postgres',
  dialectModule: pg
});

module.exports = { sequelize };
