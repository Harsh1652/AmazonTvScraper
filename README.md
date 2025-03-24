# Amazon TV Scraper

## 📌 Overview
Amazon TV Scraper is a web application that scrapes product details from Amazon using Puppeteer and displays the extracted data in an interactive frontend built with React.

## 🏗 Project Structure
```
AmazonTvScraper/
│── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── scraperController.js
│   │   ├── routes/
│   │   │   ├── scraperRoutes.js
│   │   ├── services/
│   │   │   ├── scraperService.js
│   │   ├── utils/
│   │   │   ├── fileHandler.js
│   │   ├── server.js
│── frontend/
│   ├── src/
│   │   ├── components/ui/
│   │   │   ├── Button.js
│   │   │   ├── Card.js
│   │   │   ├── Input.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   ├── logo.svg
│   │   ├── reportWebVitals.js
│── README.md
│── package.json (Backend & Frontend)
│── .gitignore
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/AmazonTvScraper.git
cd AmazonTvScraper
```

### 2️⃣ Backend Setup
```sh
cd backend
npm install
npm start
```
Backend runs on **http://localhost:5000**

### 3️⃣ Frontend Setup
```sh
cd ../frontend
npm install
npm start
```
Frontend runs on **http://localhost:3000**

---

## 🔥 API Endpoints
### 1️⃣ Scrape Amazon TV Data
**Endpoint:** `POST /api/scraper/amazon`

**Request Body:**
```json
{
  "url": "https://www.amazon.in/dp/B0CX5DW4WT"
}
```

**Response:**
```json
{
  "productName": "Samsung 55-inch 4K Smart TV",
  "rating": "4.5 stars",
  "numRatings": "12,345",
  "sellingPrice": "₹45,999",
  "totalDiscount": "10%",
  "bankOffers": ["10% Instant Discount on HDFC Bank Credit Cards"],
  "aboutThisItem": ["Ultra HD (4K) LED Smart TV"],
  "amazonImages": ["image1.jpg", "image2.jpg"]
}
```

---

## 🎨 Frontend Features
- ✅ Beautiful UI using Tailwind CSS & ShadCN components
- ✅ Input field to enter Amazon product URL
- ✅ Fetch & display scraped data
- ✅ Display product images
- ✅ Error handling & loading indicators

---

## 🛠 Technologies Used
### Backend:
- **Node.js**, **Express.js** – API development
- **Puppeteer** – Web scraping

### Frontend:
- **React.js** – UI development
- **Tailwind CSS** – Styling

---

## 🤝 Contributing
1. Fork the repo
2. Create a new branch: `git checkout -b feature-branch`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request



Happy Coding! 🚀

