# Amazon TV Scraper

This is a Node.js-based web scraper that extracts details from Amazon India Smart TV product pages using Puppeteer. The scraped data includes product name, rating, price, discount, bank offers, images, and more.

## 🚀 Features
- Extracts key product details like name, price, and rating
- Fetches all images and information from "About this item" and "From the Manufacturer" sections
- Scrapes AI-generated customer review summaries
- Uses Puppeteer for automated scraping
- Saves data in a structured JSON format

## 🏗 Project Structure
```
AmazonTvScraper/
│── src/
│   ├── server.js          # Entry point
│   ├── controllers/
│   │   ├── scraperController.js  # Handles API requests
│   ├── routes/
│   │   ├── scraperRoutes.js  # Defines API routes
│   ├── services/
│   │   ├── scraperService.js  # Core scraping logic using Puppeteer
│   ├── utils/
│   │   ├── fileHandler.js  # Manages file saving
│── .gitignore
│── package.json
│── README.md
```

## 🛠 Installation & Setup
### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/AmazonTvScraper.git
cd AmazonTvScraper
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the server
```bash
node src/server.js
```

## 📡 API Usage (Testing in Postman)

- **Endpoint:** `POST /scrape`
- **Request Body:**
```json
{
    "url": "https://www.amazon.in/dp/B0CX5DW4WT"
}
```
- **Response:** JSON containing product details

## 📌 Example Output
```json
{
    "productName": "Samsung 43-inch Crystal 4K Smart TV",
    "rating": "4.5",
    "numRatings": "12,345",
    "sellingPrice": "₹39,999",
    "totalDiscount": "20% off",
    "bankOffers": ["10% cashback on XYZ bank"],
    "aboutItem": ["Ultra HD Display", "Dolby Sound"],
    "productImages": ["image1.jpg", "image2.jpg"],
    "manufacturerImages": ["manufacturer1.jpg", "manufacturer2.jpg"],
    "customerReviewSummary": "Great picture quality!"
}
```

![image](https://github.com/user-attachments/assets/dc744cf4-7a4f-4ee8-a2c4-6e3c8d56f860)


## 🛑 Important Notes
- This scraper is designed for Amazon India (`amazon.in`).
- Avoid sending too many requests to prevent getting blocked.
- Use responsibly and follow Amazon's scraping policies.

## 🤝 Contributing
Feel free to submit pull requests or issues to improve the project.


