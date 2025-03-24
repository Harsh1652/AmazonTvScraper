const express = require('express');
const router = express.Router();
const scraperController = require('../controllers/scraperController');

router.post('/', scraperController.scrapeAmazonTV);

module.exports = router;