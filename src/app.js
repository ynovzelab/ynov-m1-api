const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const User = require("./models/user.model");
app.use(bodyParser.json());

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://vincent:Ynov12345@cluster0.ccjojk1.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("Successfully connect to database")
  })
.catch(err=>console.log(err))

app.post('/auth/register', (req, res) => {
  const newUser = new User({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email: req.body.email,
    password:req.body.password
  })
  newUser.save()
    .then((user) => {
      res.send(user)
    })
    .catch(err => {
      res.status(404).send(err)
    })
})

app.put('/user/:id', (req, res) => {
  console.log(req.params, "PARAMS");
  console.log(req.body, "BODY");
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found"
        })
      }
      res.send(user)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

app.get('/user/:id', (req, res) => {
  User.findById(req.params.id).then((user) => {
    if (!user) {
      return res.status(404).send({
        message: "User not found"
      })
    }
    res.send(user);
  })
    .catch(err => {
    res.status(400).send(err)
  })
})

app.get("/user", (req, res) => {
  User.find().then(
    (users) => {
    res.send(users)
    })
  .catch(err => res.send(err))
})

app.delete('/user/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.send({ message: `user with id ${user._id} successfully deleted` }))
    .catch(err=>res.status(400).send(err))
})

app.listen("4000", function () {
  console.log("server launch my" );
})