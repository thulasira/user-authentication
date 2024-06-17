const mongoose = require('mongoose');
require('dotenv').config();
const mySecret = process.env.MONGO_URI || 'mongodb+srv://bicstest007:bFtDNWvNlL12NrKp@cluster0.59hp8ul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const Connection = async () => {
  try {
    await mongoose.connect(mySecret, {
    })
    console.log("db connected")
    
  }
  catch (error) {
    console.error(error);
  }
}

module.exports = Connection;