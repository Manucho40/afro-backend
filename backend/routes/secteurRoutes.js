const express = require('express');
const route = express.Router();
const { getSecteur, postSecteur, putSecteur, deleteSecteur } = require('../controllers/secteurControlleur')
route.get('/', getSecteur)
route.post('/', postSecteur)
route.put('/:id', putSecteur)
route.delete('/:id', deleteSecteur)

module.exports = route;