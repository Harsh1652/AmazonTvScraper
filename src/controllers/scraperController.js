const scraperService = require('../services/scraperService');

exports.scrapeAmazonTV = async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    try {
        const data = await scraperService.scrapeAmazonTV(url);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Scraping failed', details: error.message });
    }
};