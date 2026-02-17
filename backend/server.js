require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');


// Routes Import kiye
const blogRoutes = require('./routes/blogs');
const galleryRoutes = require('./routes/gallery');
const authRoutes = require('./routes/auth');

const app = express();

// 1. Middlewares
app.use(cors());
app.use(express.json());

// 2. Database Connection
const MONGO_URI = process.env.MONGO_URI; // Ab .env file se link lega

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// 3. API Routes Use karein
app.use('/api/blogs', blogRoutes); // Is raste se Blog save honge
app.use('/api/gallery', galleryRoutes);
app.use('/api/auth',authRoutes); //auth API activation
// 4. Basic Route
app.get('/', (req, res) => {
  res.send("Server is Running... Jai Hind! 🇮🇳");
});

// 5. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("🚀 Server started on port " + PORT);
});