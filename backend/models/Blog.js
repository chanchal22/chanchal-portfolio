const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Heading
  subHeading: String,                      // Choti Heading
  category: String,                        // Social/Political etc.
  image: String,                           // Photo ka naam
  content: String,                         // Puri Kahani
  views: { type: Number, default: 0 },     // Views (Shuru me 0)
  date: { type: Date, default: Date.now }  // Aaj ki tareekh apne aap dalegi
});

module.exports = mongoose.model('Blog', blogSchema);