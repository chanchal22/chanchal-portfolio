const mongoose = require('mongoose');

// Ye "Blueprint" hai ki har Blog Post kaisi dikhegi
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, // Title likhna jaruri hai
    },
    content: {
        type: String,
        required: true, // Kuch likhna jaruri hai
    },
    image: {
        type: String, // Yahan Cloudinary ka URL aayega
        required: true,
    },
    category: {
        type: String,
        default: 'General', // Jaise: Politics, Seva, Event
    },
    date: {
        type: Date,
        default: Date.now, // Aaj ki date apne aap aa jayegi
    }
});

module.exports = mongoose.model('Post', postSchema);