const express = require('express');//Affectation de la librairie express dans la constante express.
const route = express.Router();// Affectation de la méthode Router() dans la constante router.

// Utilisation du destructuring pour affecter les fonctions exporté du controller spotlightController dans des constantes
const { getSpotlight, postSpotlight, deleteSpotlight } = require('../controllers/spotlightController')
route.get('/', getSpotlight)
route.post('/', postSpotlight)
route.delete('/:id', deleteSpotlight)


module.exports = route;