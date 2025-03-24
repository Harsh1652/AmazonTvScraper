const axios = require('axios');
const cheerio = require('cheerio');

const SCRAPER_API_KEY = "61e8dde877d36af5236cab97f3b2dde9"; 

exports.scrapeAmazonTV = async (url) => {
    try {
        const scraperUrl = `http://api.scraperapi.com?api_key=${SCRAPER_API_KEY}&url=${encodeURIComponent(url)}`;

        const { data } = await axios.get(scraperUrl, {
            headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" }
        });

        const $ = cheerio.load(data);

        const getText = (selector) => $(selector).text().trim() || 'N/A';
        const getAllTexts = (selector) => $(selector).map((_, el) => $(el).text().trim()).get();
        const getAllImages = (selector) => $(selector).map((_, el) => $(el).attr('src')).get();

        return {
            productName: getText('#productTitle'),
            rating: getText('.a-icon-alt'),
            numberOfRatings: getText('#acrCustomerReviewText'),
            sellingPrice: getText('.a-price .a-offscreen'),
            totalDiscount: getText('.priceBlockSavingsString'), // Updated selector
            bankOffers: getAllTexts('.a-section .a-spacing-none span.a-text-bold'),
            aboutThisItem: getAllTexts('#feature-bullets ul li span'),
            amazonImages: getAllImages('#imgTagWrapperId img'),
        };
    } catch (error) {
        console.error("Scraping failed:", error.message);
        return { error: "Failed to fetch data" };
    }
};
