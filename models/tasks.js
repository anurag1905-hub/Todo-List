const mongoose = require('mongoose');

//Create a Schema 
const taskSchema = new mongoose.Schema({
    content: {
        type:String,
        required:true,
    },
    category: {
        type:String,
        required:true,
    },
    due: {
        type:Date,
        required:true,
    }
},{
    timestamps:true
});

//Give the name of the collection that will be stored in the database and will be defined using the schema 'taskSchema'.
const Task = mongoose.model('Task',taskSchema);

module.exports = Task;