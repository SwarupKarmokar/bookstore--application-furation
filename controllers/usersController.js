// CREATING USER CONTROLLER 
const asyncHandler = require('express-async-handler');
const User = require('../models/usersSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


// desc: Register an user 
// route: POST /api/user/register 
// access: public 

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All Fields Mandatory");
    }

    const userAvailable = await User.findOne({ email });

    if (userAvailable) {
        res.status(400);
        throw new Error("User Already Exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
        name, email, password: hashPassword
    })

    res.status(200).json({
        message: "Successfully Registered",
        data: { _id: user.id, name: user.name, email: user.email }
    })
})




// desc: User Login 
// route: POST /api/user/login 
// access: public 

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All Fields Mandatory")
    }

    const user = await User.findOne({ email });

    // COMPARING PASSWORD WITH HASH PASSWORD 
    if (user && bcrypt.compare(password, user.password)) {
        const accessToken = jwt.sign(
            {
                user: {
                    name: user.name,
                    email: user.email,
                    id: user.id
                }
            }, process.env.SECRET_KEY, { expiresIn: '3d' }
        )
        res.status(200).json({
            token: accessToken
        })
    }

    else {
        res.status(401);
        throw new Error("Email || Password not valid")
    }
})


// @DESC: USER INFO
// @ROUTE: GET /api/users/current
// @ACCESS: PUBLIC 

const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
})


module.exports = { registerUser, loginUser, currentUser }