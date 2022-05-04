const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://testuser007:testpassword@india-mart-cluster.n3imd.mongodb.net/india-mart?retryWrites=true&w=majority');
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;