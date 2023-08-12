
const Sequelize = require("sequelize");
const pg = require('pg');
// import { User } from "@/models/User";

const seq = new Sequelize('app-router-learner', 'celinkacywinska', 'postgres', { host: 'localhost', dialect: "postgres", dialectModule: pg })

const testDbConnection = async () => {
  try {
    await seq.authenticate();
    console.log("Connection has been established successfully.");
    // await User.sync({force: true});
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = { sq: seq, testDbConnection };