const express = require('express');
const router = express.Router();
const Gallery = require('../models/Gallery');
const { storage } = require('./cloudinary'); // Agar file routes folder me hai to './' use karein
const multer = require('multer');

const upload = multer({ storage: storage });

// POST: Gallery Upload
// POST: Gallery Upload (Nayi Photo Save karne ke liye)
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, category } = req.body;
    const imagePath = req.file ? req.file.path : "";

    if (!imagePath) {
      return res.status(400).json({ message: "Image upload failed on Cloudinary" });
    }

    const newPhoto = new Gallery({
      title: title || "Untitled",
      category: category || "General",
      image: imagePath
    });

    await newPhoto.save();
    res.status(201).json(newPhoto);
  } catch (err) {
    console.error("Gallery Upload Error:", err);
    res.status(500).json({ error: err.message });
  }
});
// GET: Sabhi Gallery Photos mangane ke liye
router.get('/', async (req, res) => {
  try {
    const photos = await Gallery.find().sort({ date: -1 }); // Nayi photo sabse upar
    res.status(200).json(photos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;