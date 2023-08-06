const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/habit-hunter');

const mongoConnection = mongoose.connection;

mongoConnection.on('error' , console.error.bind(console, 'There is some issue while connecting to DB '));

mongoConnection.once('open' , function(){
    console.log('Mongo Connected successfully');
})