const express = require('express');
const app = express();
const port = 8000;

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server at port ${port}`);
    }
    else{
        console.log(`Server is running successfully at port ${port}`);
    }
});
