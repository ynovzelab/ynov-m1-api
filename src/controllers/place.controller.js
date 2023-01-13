const Place = require('../models/place.model');

exports.createPlace = (req, res) => {
  // const newPlace = new Place({
  //   name: req.body.name
  // })
  Place.create(req.body).then(
    (place) =>
      res.send(place)
  )
    .catch(err => res.status(400).send(err));
}