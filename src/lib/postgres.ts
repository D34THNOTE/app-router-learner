const { Sequelize } = require('sequelize');
const  pg  = require('pg');

export const sequelize = new Sequelize('postgres', 'user', 'user', {
  host: 'localhost',
  dialect: 'postgres',
  dialectModule: pg
});


