const express = require('express'); //Affectation de la librairie express dans la constante express.
const route = express.Router();// Affectation de la méthode Router() dans la constante router.

// Utilisation du destructuring pour affecter les fonctions exporté du controller secteurController dans des constantes
const { getSecteur, postSecteur, putSecteur, deleteSecteur } = require('../controllers/secteurControlleur')
route.get('/', getSecteur)
route.post('/', postSecteur)
route.put('/:id', putSecteur)
route.delete('/:id', deleteSecteur)

module.exports = route;