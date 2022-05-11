const express = require('express');
const route = express.Router();
const { getSpotlight, postSpotlight, deleteSpotlight } = require('../controllers/SpotlightController')
route.get('/', getSpotlight)
route.post('/', postSpotlight)
route.delete('/:id', deleteSpotlight)


module.exports = route;