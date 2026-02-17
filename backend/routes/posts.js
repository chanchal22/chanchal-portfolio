const router = require('express').Router();
const multer = require('multer');
const { storage } = require('./cloudinary'); // Cloudinary storage import kiya
const Post = require('../models/Post'); // Post model import kiya

// Upload ka setup (Multer)
const upload = multer({ storage });

// 1. Naya Blog Post karne ka Route (Photo ke sath)
router.post('/', upload.single('image'), async (req, res) => {
    try {
        // Agar photo nahi aayi to error do
        if (!req.file) {
            return res.status(400).json({ error: "Photo upload karna jaruri hai!" });
        }

        // Database ke liye naya Post taiyar karo
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content,
            image: req.file.path, // Cloudinary ka URL yahan aayega automatically
            category: req.body.category,
        });

        // Save karo
        const savedPost = await newPost.save();
        res.status(200).json(savedPost); // Wapas batao ki save ho gaya

    } catch (err) {
        res.status(500).json(err);
    }
});

// 2. Sare Posts dekhne ka Route (Frontend ke liye)
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 }); // Nayi post sabse upar
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;