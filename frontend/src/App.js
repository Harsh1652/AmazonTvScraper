import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import Input from "./components/ui/Input";
import Button from "./components/ui/Button";

export default function AmazonScraper() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://amazon-tv-backend.onrender.com/api/scraper/amazon", {
      method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) throw new Error("Failed to fetch data");

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError("Failed to fetch data: " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🛍️ Amazon TV Scraper
        </h1>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter Amazon Product URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 p-3 border rounded-lg"
          />
          <Button
            onClick={fetchData}
            className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Scrape
          </Button>
        </div>
        {loading && <p className="mt-4 text-center text-gray-600">⏳ Loading...</p>}
        {error && <p className="mt-4 text-center text-red-500">{error}</p>}
      </div>

      {data && (
        <Card className="mt-6 p-6 bg-white shadow-lg rounded-xl w-full max-w-2xl">
          <CardContent> 
  <h2 className="text-2xl font-semibold text-gray-900">
    {data.productName}
  </h2>

  {/* Reviews Section */}
    <h3 className="text-lg font-semibold text-gray-700 mt-2">Reviews</h3>
    <p className="text-gray-600">
      ⭐ {data.rating} ({data.numRatings} reviews)
    </p>

    {/* Price Section */}
    <h3 className="text-lg font-semibold text-gray-700 mt-2">Price</h3>
    <p className="text-xl font-bold text-blue-600">
      💰 {data.sellingPrice}
    </p>

    {/* Discount Section */}
    <h3 className="text-lg font-semibold text-gray-700 mt-2">Discount</h3>
    <p className="text-sm text-green-600">{data.totalDiscount}</p>

            {data.bankOffers.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">💳 Bank Offers:</h3>
                <ul className="text-gray-700">
                  {data.bankOffers.map((offer, index) => (
                    <li key={index} className="text-sm">✔ {offer}</li>
                  ))}
                </ul>
              </div>
            )}

            {data.aboutThisItem.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">📦 About This Item:</h3>
                <ul className="text-gray-700">
                  {data.aboutThisItem.map((item, index) => (
                    <li key={index} className="text-sm">🔹 {item}</li>
                  ))}
                </ul>
              </div>
            )}

            {data.amazonImages.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">🖼️ Product Images:</h3>
                <div className="mt-2 flex gap-3 overflow-x-auto">
                  {data.amazonImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Product ${index}`}
                      className="w-32 h-32 object-cover rounded-lg shadow"
                    />
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
