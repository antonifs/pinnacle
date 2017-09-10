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

const Article = database.define("article", {
    title: Sequelize.STRING
});

// force: true will drop the table if it already exists
Article.sync({force: true}).then(() => {
  // Table created
  return Article.create({
    title: 'Ehehe'
  });
});