const express = require('express');
const router = express.Router();
const typePlaceController = require('../controllers/typePlace.controller');

router.get('/', typePlaceController.getTypesPlace);
router.post('/', typePlaceController.createTypePlace);

module.exports = router;