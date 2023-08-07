const mongoose = require('mongoose'); //Importing mongoose

// Establishing database connection
mongoose.connect('mongodb://127.0.0.1:27017/habit-hunter');

const mongoConnection = mongoose.connection;

// This will show the error if any while connecting the Data base
mongoConnection.on('error' , console.error.bind(console, 'There is some issue while connecting to DB '));


mongoConnection.once('open' , function(){
    console.log('Mongo Connected successfully');
})