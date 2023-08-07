// Importing express
const express = require('express');
// The port on which our server is running
const port = 7000;
const app = express();
// Importing data base connection
const db = require('./config/mongoose');
// Importing the router file
const router = require('./routes/index');

//Middleware is used to parse the data from the incoming request
app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use('/' , router);
//setting up the view engine
app.set('view engine' ,'ejs');
app.set('views' , './views');


app.listen(port , function(err){
    if(err){
        console.log('There is an error: ', err);
        return;
    }

    console.log(`Server is running on the ${port}`);
})