const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const apiRouter = require('./routes');

app.use(bodyParser.json());

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://vincent:Ynov12345@cluster0.ccjojk1.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("Successfully connect to database")
  })
.catch(err=>console.log(err))

app.use("/api/v1", apiRouter);

app.listen("4000", function () {
  console.log("server launch my" );
})