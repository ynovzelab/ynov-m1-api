function verifyAdmin(req, res, next) {
  if (!req.userToken.isAdmin) {
    return res.status('401').send({
      auth: false,
      message: "You must be an Admin"
    })
  }
  next();
}

module.exports = verifyAdmin;