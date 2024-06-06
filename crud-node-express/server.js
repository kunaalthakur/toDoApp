const express = require('express');
const bodyParser = require('body-parser');
const dbcon=require('./config/dbConfig');
const router=require('./routes/route');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});