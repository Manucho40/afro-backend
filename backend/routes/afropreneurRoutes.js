const express = require('express'); //Affectation de la librairie express dans la constante express.
const router = express.Router() // Affectation de la méthode Router() dans la constante router.

// Utilisation du destructuring pour affecter les fonctions exporté du controllers afropreneurController dans des constantes
const {getAfropreneurs, postAfropreneurs, putAfropreneurs, deleteAfropreneurs} = require('../controllers/afropreneurController')
router.get('/', getAfropreneurs)
router.post('/', postAfropreneurs)
router.put('/:id', putAfropreneurs)
router.delete('/:id', deleteAfropreneurs)
module.exports = router;