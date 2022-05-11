const express = require('express');
const router = express.Router()
const {getAfropreneurs, postAfropreneurs, putAfropreneurs, deleteAfropreneurs } = require('../controllers/afropreneurController')
router.get('/', getAfropreneurs)
router.post('/', postAfropreneurs)
router.put('/:id', putAfropreneurs)
router.delete('/:id', deleteAfropreneurs)
module.exports = router;