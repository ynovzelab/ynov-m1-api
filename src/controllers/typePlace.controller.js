const TypePlace = require("../models/typePlace.model.js");

exports.createTypePlace = (req, res) => {
  const newTypePlace =  new TypePlace({
    name:req.body.name
  })
  newTypePlace.save().then(
    (typePlace) =>
      res.send(typePlace)
  )
    .catch(err => res.status(400).send(err));
}

exports.getTypesPlace = (req, res) => {
  TypePlace.find().then((typePlace) => {
    res.send(typePlace)
  })
  .catch(err => res.status(400).send(err))
}