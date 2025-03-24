const express = require("express");
const cors = require("cors");  
const { scrapeAmazonTV } = require("./services/scraperService");  

const app = express();

// ✅ Enable CORS (Allow requests from frontend)
app.use(cors({ origin: "http://localhost:3000" })); 

app.use(express.json());

app.post("/api/scraper/amazon", async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) return res.status(400).json({ error: "URL is required" });

        const productData = await scrapeAmazonTV(url);
        res.json(productData);
    } catch (error) {
        console.error("Scraping Error:", error);
        res.status(500).json({ error: "Scraping failed" });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
