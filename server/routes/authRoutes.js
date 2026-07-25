const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const protect = require("../middleware/authMiddleware");

// 1. Register Route
router.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    res.status(201).json({
        message: "User Registered Successfully",
        user: { name, email }
    });
});

// 2. Real Login Route
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    const token = jwt.sign(
        { id: "65a123456789", email: email },
        process.env.JWT_SECRET || "secret123",
        { expiresIn: "1h" }
    );

    res.status(200).json({
        message: "Login Successful",
        token: token,
        user: { id: "65a123456789", name: "Armin", email: email }
    });
});

// 3. Protected Profile Route
router.get("/profile", protect, (req, res) => {
    res.json({
        message: "Protected Route",
        user: req.user
    });
});

module.exports = router;