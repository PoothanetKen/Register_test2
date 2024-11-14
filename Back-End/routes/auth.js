const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/users');

const router = express.Router();

router.post('/register', async (req, res) => {
   const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).send("Please provide all required to fields");
    }

    try {
        const userExists = await User.findOne( { email });
        if (userExists) {
            return res.status(400).send("Email already exists" );
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, lastName, email, password: hashedPassword});
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (err) {
        res.status(500).send("Server error");
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Please provide all required to fields");
    }
    try {
        const user = await User.findOne({ email });
         if (!user) return res.status(400).send("Invalid credentials");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Incorrect Password");

        res.status(200).json({ message: "Login successful", 
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            } });

    } catch (err) {
        res.status(500).send("Server error");
    }
});

module.exports = router;