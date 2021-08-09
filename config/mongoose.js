//Get Mongoose
const mongoose = require('mongoose');

//Connect Mongoose to the database
mongoose.connect('mongodb://localhost/todo_list_db');

//Mongoose is Connected to the db. Now,Connection of mongoose gives access to the db.
const db = mongoose.connection;

//If there is an error
db.on('error',console.error.bind(console,'error connecting to the db'));

//Up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
});

