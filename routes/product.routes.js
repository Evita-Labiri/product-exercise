const express = require('express');
const router = express.Router();
const prodController = require('../controller/product.controller');

router.get('/findall', prodController.findAll);
router.get('/findone', prodController.findOne);
router.post('/create', prodController.create);
router.patch('/update', prodController.update);
router.delete('/delete', prodController.findOneAndDelete);

module.exports = router;