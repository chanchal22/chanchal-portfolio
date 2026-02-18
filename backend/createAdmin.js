require('dotenv').config(); // .env फाइल से MONGO_URI लेने के लिए
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// डेटाबेस से कनेक्ट करना
const connectDB = async () => {
    try {
        // आपकी लाइव रेंडर वाली डेटाबेस लिंक
        // अगर .env फाइल नहीं चल रही, तो नीचे अपनी MONGO_URI खुद पेस्ट करें
        const db = process.env.MONGO_URI || "mongodb+srv://admin:chanchal2026@cluster0.ihdger9.mongodb.net/test?retryWrites=true&w=majority";
        
        await mongoose.connect(db);
        console.log('✅ MongoDB Connected...');
    } catch (err) {
        console.error('❌ Database Connection Error:', err.message);
        process.exit(1);
    }
};

// एडमिन बनाने का फंक्शन
const createAdmin = async () => {
    await connectDB();

    try {
        // 1. पुराना एडमिन अगर है तो उसे हटाना (ताकि डुप्लीकेट न हो)
        const collection = mongoose.connection.collection('users');
        await collection.deleteMany({ email: "admin@gmail.com" });
        console.log("🗑️  Old admin removed (if existed).");

        // 2. पासवर्ड को सुरक्षित (Hash) बनाना
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("123456", salt); // पासवर्ड: 123456

        // 3. नया एडमिन डेटा
        const newAdmin = {
            username: "admin",
            email: "admin@gmail.com",
            password: hashedPassword,
            role: "admin",
            createdAt: new Date()
        };

        // 4. डेटाबेस में डालना
        await collection.insertOne(newAdmin);
        console.log("🎉 Success! New Admin Created.");
        console.log("📧 Email: admin@gmail.com");
        console.log("🔑 Password: 123456");

    } catch (error) {
        console.error("❌ Error creating admin:", error);
    } finally {
        // काम खत्म होने पर कनेक्शन बंद
        mongoose.connection.close();
    }
};

createAdmin();