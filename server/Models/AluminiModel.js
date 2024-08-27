const mongoose = require('mongoose');

// Define the schema for the Alumni model
const alumniSchema = new mongoose.Schema({
  NameToBeSent: {
    type: String,
    required: true,
    trim: true,
  },
  PasswordToBeSent: {
    type: String,
    required: true,
    trim: true,
  },
  EmailToBeSent: {
    type: String,
    required: true,
    trim: true,
    unique: true, // Ensure the email is unique
  },
  Linkden_Link: {
    type: String,
    trim: true,
  },
  Twitter_Link: {
    type: String,
    trim: true,
  },
  InstaGram_Link: {
    type: String,
    trim: true,
  },
  verified: {
    type: Boolean,
    required: true,
    default: false, 
  },
}, { collection: 'temporaryalumnis' });

const AlumniModel = mongoose.model('Alumni', alumniSchema);

module.exports = AlumniModel;
