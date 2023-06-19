const express = require('express');
require('dotenv').config();

// CREATING PORT FOR APP 
const port = process.env.PORT || 5000;

const app = express();

// MIDDLEWARE 
app.use(express.json());

// ADDING ROUTES TO THE APP 
app.use('/api/items', require('./routes/itemRoutes'))


// ADDING TO THE PORT 
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`port running at: http://localhost:${port}`)
})