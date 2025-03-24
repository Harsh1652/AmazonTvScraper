const { chromium } = require('playwright');

exports.scrapeAmazonTV = async (url) => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const productData = await page.evaluate(() => {
        const getText = (selector) => document.querySelector(selector)?.innerText.trim() || 'N/A';
        const getAllTexts = (selector) => Array.from(document.querySelectorAll(selector)).map(el => el.innerText.trim());
        const getAllImages = (selector) => Array.from(document.querySelectorAll(selector)).map(el => el.src);

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
    });

    await browser.close();
    return productData;
};
