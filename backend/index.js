require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();
require('./database');

const port = process.env.PORT || 3030;

// Server the static files from the React app
app.use(express.static(path.join(__dirname, '../build')));

// Middleware
app.use(express.json());

// An api endpoint that returns a short list of items
app.use('/api/products', require('./routes/product.routes'));

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.listen(port, () =>{
    console.log(`Server on port: ${port}`)
});

