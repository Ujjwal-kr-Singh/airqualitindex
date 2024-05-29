const express= require('express');
const app = express();
const axios = require('axios');
const Cors = require('cors');
const routes=require('./routes/router');
const connect = require('./connection');
const apiUrl = "https://api.api-ninjas.com/v1/airquality?city=";
const apiKey = 't+O/4XAQnZ9NUcDswHrLnw==2f5ebMbPzv0PA47r';

connect();

app.use(Cors());
app.use(express.json());
app.use(routes);



app.listen(3000, (error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("server is running on port 3000");
    }
})