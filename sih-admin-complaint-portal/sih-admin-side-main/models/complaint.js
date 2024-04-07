const mongoose = require('mongoose');

// Define the schema for the Complaints collection
const complaintsSchema = new mongoose.Schema({
  photo: {
    type: String,
     // Assuming the photo will be a string path to the uploaded image
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: Array,
    required: true
  },
  IP: {
    type: String,
    required: true
  }
});

// Create a model using the schema
const Complaints = mongoose.model('Complaints', complaintsSchema);

module.exports = Complaints;