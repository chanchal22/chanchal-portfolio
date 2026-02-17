const router = require('express').Router();

// Login Check karne ke liye API
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Aapka secret username aur password yahan set karein
    if (username === 'admin' && password === 'Chanchal@2026') {
        res.status(200).json({ 
            success: true, 
            token: "chanchal-secret-key-789" // Ye token browser mein save hoga
        });
    } else {
        res.status(401).json({ 
            success: false, 
            message: "Galat Username ya Password!" 
        });
    }
});

module.exports = router;