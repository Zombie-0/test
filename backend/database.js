const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.connection.on('error', err =>{
    console.log(`MongoDB connection error: ${err}`)
});

mongoose.connection.on('connected', () =>{
    console.log('MongoDB is connected!')
});