const express = require('express');
const app = express();
const port = 8000;

//Connect to database
const db = require('./config/mongoose');

//Schema needs to be of Constant name.
const Task = require('./models/tasks');

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.urlencoded());
app.use(express.static('assets'));

var Months=["January","February","March","April","May","June","July","August","September","October","November","December"];

app.get('/',function(req,res){
    Task.find({},function(err,list){
        if(err){
            console.log('Error in fetching tasks from the db');
            return res.end();
        }
        return res.render('home',{
            tasks_list:list,
            month:Months,
        });
    });
});

app.post('/create-tasks',function(req,res){
    Task.create({
        content:req.body.content,
        category:req.body.category,
        due:req.body.due,
    },function(err,newTask){
       if(err){
           console.log('Error in creating a contact');
           return;
       }
       console.log('************',newTask);
       return res.redirect('back');
    });
});

app.get('/delete-tasks',function(req,res){
    let id=req.query.id;
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting an object from database');
            return;
        }
        return res.redirect('back');
    })
})

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server at port ${port}`);
    }
    else{
        console.log(`Server is running successfully at port ${port}`);
    }
});
