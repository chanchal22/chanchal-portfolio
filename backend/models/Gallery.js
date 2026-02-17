const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: String,
  category: { type: String, required: true }, // Blood/Youth/Social
  image: { type: String, required: true },    // Photo ka link
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Gallery', gallerySchema);