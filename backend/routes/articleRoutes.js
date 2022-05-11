const express = require('express');
const router = express.Router();
const { getArticles, postArticles, putArticles, deleteArticles} = require('../controllers/articleController')
router.get('/', getArticles);
router.post('/', postArticles);
router.put('/:id', putArticles);
router.delete('/:id', deleteArticles);
module.exports = router;
