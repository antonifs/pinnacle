const Sequelize = require('sequelize');
const database = require('../config/database');

database
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const Tesaja = database.define("tesaja2", {
    title: Sequelize.STRING
});

module.exports = Tesaja;