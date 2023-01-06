var jwt = require('jsonwebtoken');

exports.signJwt = (payload, secret) => {
  const token = jwt.sign(payload, secret);
  return token;
}