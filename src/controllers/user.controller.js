const User = require("./models/user.model");

exports.register = (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
  newUser.save()
    .then((user) => {
      res.send(user)
    })
    .catch(err => {
      res.status(404).send(err)
    })
}

exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
}

exports.deleteOneUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => res.send({ message: `user with id ${user._id} successfully deleted` }))
    .catch(err => res.status(400).send(err))
}