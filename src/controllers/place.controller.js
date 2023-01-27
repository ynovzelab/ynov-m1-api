const Place = require('../models/place.model');

exports.createPlace = (req, res) => {

  Place.create(req.body).then(
    (place) => {
      console.log(place._id);
      // $set
      // const user = User.findById(req.userToken.id);
      // user.places.push(place._id);
      // user.save();
      res.send(place)
    }
  )
    .catch(err => res.status(400).send(err));
}

exports.getPlaces = (req, res) => {
  Place.find().populate('owner').then(
    (places) => res.send(places)
    .catch(err => res.status(400).send(err)))
}

exports.getMyPlaces = (req, res) => {
  User.findById(req.userToken.id).populate('places').then(
    (user) => {
      res.send(user.places);
    }
  )
}