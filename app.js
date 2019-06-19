const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// const states = ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];

app.use('/axiosjs', express.static(__dirname + '/node_modules/axios/dist/'));
app.use('/chartsjs', express.static(__dirname + '/node_modules/chart.js/dist/'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(){
    console.log(`App running on localhost:${port}`);
});