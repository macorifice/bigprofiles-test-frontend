require('dotenv').config();

const config = {
  dbhost: process.env.DB_HOST,
  dbusername: process.env.DB_USERNAME,
  dbpassword: process.env.DB_PASSWORD,
  dbname: process.env.DB_NAME,
  dbport: process.env.DB_PORT,
};

module.exports = config;
