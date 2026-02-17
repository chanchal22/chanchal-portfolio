const express = require('express');
const router = express.Router();
const multer = require('multer');
const Blog = require('../models/Blog');

// YAHAN CHANGE KIYA HAI (Sahi Rasta: ./)
const { storage } = require('./cloudinary'); 
const upload = multer({ storage });

// 1. POST: Naya Blog Save karein
router.post('/', upload.single('image'), async (req, res) => {
  try {
    // 1. Frontend से आने वाले डेटा को चेक करें
    console.log("Body Data:", req.body); 

    const { title, category, desc, subHeading } = req.body; 
    const imagePath = req.file ? req.file.path : "";

    const newBlog = new Blog({
      title: title,
      subHeading: subHeading,
      category: category,
      content: desc, // 'desc' को डेटाबेस के 'content' कॉलम में डालें
      image: imagePath
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    console.error("Post Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// 2. GET: Sabhi Blogs layein
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. PUT: Blog Update (Edit) karein
router.put('/:id', upload.single('image'), async (req, res) => {
  try {
    const { title, category, desc } = req.body;
    
    let updateData = {
      title,
      category,
      desc,
      fullContent: desc
    };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updateData, { new: true });
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 4. DELETE: Blog Delete karein
router.delete('/:id', async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// GET: Single Blog by ID & Increase Views
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id, 
      { $inc: { views: 1 } }, 
      { new: true }
    );
    
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    
    res.status(200).json(blog);
  } catch (err) {
    console.error("Single Blog Fetch Error:", err);
    res.status(500).json(err);
  }
});

module.exports = router; // Ensure this is at the very end