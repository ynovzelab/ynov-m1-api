const User = require("../models/user.model.js");

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.userToken.id, req.body, { new: true })
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
}

exports.getOneUser = (req, res) => {
  User.findById(req.userToken.id).then((user) => {
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
}

exports.deleteOneUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.send({ message: `user with id ${user._id} successfully deleted` }))
    .catch(err => res.status(400).send(err))
}

exports.getUsers = (req, res) => {
  User.find().then(
    (users) => {
      res.send(users)
    })
    .catch(err => res.send(err))
}