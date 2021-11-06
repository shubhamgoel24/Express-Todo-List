const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin123@cluster0.80coc.mongodb.net/todo_task_db?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'Error Connecting Database'));
db.once('open',function(){
    console.log("Database Connected");
});