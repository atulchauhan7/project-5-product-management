const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer')
const route = require("./routes/routes");
const mongoose = require('mongoose')
const app = express();

app.use(bodyParser.json()); //  global middlewares content type : application/json
app.use(bodyParser.urlencoded({extended: true}));  //  global middlewares
app.use(multer().any()) 

mongoose.connect("mongodb+srv://group25:group25@cluster0.syx2i.mongodb.net/test", {useNewUrlParser: true})
.then(() => console.log('MongoDB is Connected..'))
.catch(err => console.log((err)))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port '+ (process.env.PORT || 3000))
});