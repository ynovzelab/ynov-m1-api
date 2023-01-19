const Place = require('../models/place.model');

exports.createPlace = (req, res) => {

  console.log(req.body.description)

  Place.create(req.body).then(
    (place) =>
      res.send(place)
  )
    .catch(err => res.status(400).send(err));
}

exports.getPlaces = (req, res) => {
  Place.find().populate('owner').then(
    (places) => res.send(places)
    .catch(err => res.status(400).send(err)))
}

// exports.getMyPlaces = (req, res) => {
//   User.findById(req.userToken.id).populate('places').then(
//     (user) => {
   
//     }
//   )
// }