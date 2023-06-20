const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const jwt = require('json-web-token');
require('dotenv').config();
const User = require('../models/usersSchema');


// @DESC: REGISTERING A USER 
// @ROUTE: POST /api/users/register
// @ACCESS: PUBLIC 

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory")
    }

    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists")
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const user = await User.create({ name, email, password: hashPassword })

    if (user) {
        res.status(200).json({ _id: user.id, name: user.name, email: user.email })
    }
    else {
        res.status(400)
        throw new Error("User data not valid")
    }
})


// @DESC: USER LOGIN 
// @ROUTE: POST /api/users/login 
// @ACCESS: PUBLIC 

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ name: user.name }, process.env.SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ token });
})


// @DESC: USER INFO
// @ROUTE: GET /api/users/current
// @ACCESS: PUBLIC 

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
})


module.exports = { registerUser, loginUser, currentUser }