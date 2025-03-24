const axios = require('axios');
const cheerio = require('cheerio');

exports.scrapeAmazonTV = async (url) => {
    try {
        const { data } = await axios.get(url, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
            }
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
            totalDiscount: getText('.savingsPercentage'),
            bankOffers: getAllTexts('.a-section .a-spacing-none span.a-text-bold'),
            aboutThisItem: getAllTexts('#feature-bullets ul li span'),
            productInformation: getAllTexts('#productDetails_techSpec_section_1 tbody tr'),
            amazonImages: getAllImages('#imgTagWrapperId img'),
            manufacturerImages: getAllImages('#aplus img')
        };
    } catch (error) {
        console.error("Scraping failed:", error.message);
        return { error: "Failed to fetch data" };
    }
};
