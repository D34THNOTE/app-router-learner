const { DataTypes } = require('sequelize');
const { sequelize } = require('../lib/postgres');

const User = sequelize.define('users', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = { User };
