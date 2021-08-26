const express = require('express');
const port = 8000;
const path = require('path');
const db = require('./config/mongoose');
const Task = require('./models/task')

const app = express();

app.use(express.static('./assets'));


app.set('view engine', 'ejs');
app.set('views' , path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use('/',require('./routes'));


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }
    console.log(`Server up on ${port}`);
});