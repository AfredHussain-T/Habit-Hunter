const express = require('express');
const port = 7000;
const app = express();
const db = require('./config/mongoose');
const router = require('./routes/index');


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