const express = require('express');
const errorHandler = require('./middleware/errorHandler');
require('dotenv').config();

// CONNECTING DATABASE 
require('./config/mongoose')

// CREATING PORT FOR APP 
const port = process.env.PORT || 5000;

const app = express();

// MIDDLEWARE 
app.use(express.json());

// ADDING ROUTES TO THE APP 
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/items', require('./routes/itemRoutes'))

// CUSTOM MIDDLEWARE 
app.use(errorHandler)


// ADDING TO THE PORT 
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`port running at: http://localhost:${port}`)
})