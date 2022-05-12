const express = require('express');//Affectation de la librairie express dans la constante express.
const router = express.Router();// Affectation de la méthode Router() dans la constante router.

// Utilisation du destructuring pour affecter les fonctions exporté du controller articleController dans des constantes
const { getArticles, postArticles, putArticles, deleteArticles} = require('../controllers/articleController')
router.get('/', getArticles);
router.post('/', postArticles);
router.put('/:id', putArticles);
router.delete('/:id', deleteArticles);
module.exports = router;
