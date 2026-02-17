const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Agar aapke pass asli URL nahi hai to ye line error degi,
        // Lekin file milna jaruri hai.
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected: ' + conn.connection.host);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDB;