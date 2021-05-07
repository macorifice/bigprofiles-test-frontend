const mongoose = require('mongoose');
const config = require('./config');

const connection = `mongodb://${config.dbusername}:${config.dbpassword}@${config.dbhost}:${config.dbport}/${config.dbname}`;
const connectDb = () => {
  return mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
module.exports = connectDb;
