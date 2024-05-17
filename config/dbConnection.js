const mongoose = require('mongoose');
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      'DATABASE CONNECTED: ',
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log('ERROR:', error);
    process.exit(1);
  }
};

module.exports = connectDb;
