const mongoose = require('mongoose');

const Connection = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb+srv://bicstest007:bFtDNWvNlL12NrKp@cluster0.59hp8ul.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    if (!uri) {
      throw new Error('MONGO_URI environment variable not defined');
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = Connection;
