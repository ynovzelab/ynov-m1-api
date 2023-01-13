const User = require("../models/user.model.js");
const bcrypt = require('bcrypt');
const { signJwt } = require("../helpers/signJwt.js");

exports.register = (req, res) => {

const hashedPassword = bcrypt.hashSync(req.body.password, 10);

const newUser = new User({
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  email: req.body.email,
  password: hashedPassword
})
newUser.save()
  .then((user) => {
    const userToken = signJwt({
      id: user._id,
      isAdmin: user.isAdmin
    }, process.env.JWT_SECRET)

    res.send({
      token: userToken
    })
  })
  .catch(err => {
    res.status(404).send(err)
  })

}

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found",
          auth: false
        })
      }
      let isPasswordValid = bcrypt.compareSync(req.body.password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send({
          message: "password not valid",
          auth: false
        })
      }
      const userToken = signJwt({
        id: user._id,
        isAdmin: user.isAdmin
      }, process.env.JWT_SECRET)

      res.send({
        auth:true,
        message:"User logged",
        token: userToken
      })

    })
    .catch((err) => {
      res.status(400).send(err);
    })
}