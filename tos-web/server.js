//server.js
const express =require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000

app.listen(8080, function (){
    console.log('listening on 8080')
});