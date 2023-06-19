const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

// CONNECTING OUR DATABASE 
mongoose.connect(process.env.MONGO_URL)
    .then(console.log("connected"))
    .catch((err) => console.log(err));