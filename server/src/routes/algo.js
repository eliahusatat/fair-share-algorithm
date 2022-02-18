const express = require('express')
const router = express.Router()
// const Fetch = require('../service/Fetch');
const algoController = require('../controllers/algoController')

router.post('/test-algo', algoController.test)

module.exports = router
