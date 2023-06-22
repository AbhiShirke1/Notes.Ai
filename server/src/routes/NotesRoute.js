const express = require('express')
const SaveController = require('../controllers/SaveController.js')
const router = express.Router();

router.post('/savenotes', SaveController)


module.exports  = router