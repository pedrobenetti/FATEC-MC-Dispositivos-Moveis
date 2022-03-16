const express = require('express');
const app = express(); 

app.get("/texto", (request,response)=>{

    return response.send("texto");

});
    

app.listen(3000);
