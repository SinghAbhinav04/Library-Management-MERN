const User = require('../models/user');

// Create a new user
async function handleCreateUser(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User with this email already exists" });
        }

        // Create and save the new user
        await User.create({ name, email, password });

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.error("Error =>", err);
        return res.status(500).json({ message: "Server Error" });
    }
}

// Update user details
async function updateUserDetails(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const updatedUser = await User.findOneAndUpdate(
            { email: req.params.email }, // Assuming email is used as a unique identifier
            { name, email, password },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (err) {
        console.error("Error =>", err);
        return res.status(500).json({ message: "Server Error" });
    }
}

// Delete a user
async function deleteUser(req, res) {
    try {
        const { email } = req.params;

        const deletedUser = await User.findOneAndDelete({ email });

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.error("Error =>", err);
        return res.status(500).json({ message: "Server Error" });
    }
}

// Handle user login
async function handleLoginUser(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        console.log("Successful");
        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        console.error("Error =>", err);
        return res.status(500).json({ message: "Server Error" });
    }
}

module.exports = {
    handleCreateUser,
    updateUserDetails,
    deleteUser,
    handleLoginUser,
};
