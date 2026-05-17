import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Foodcard from "./Foodcard";
import { useLocation } from "react-router-dom";

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  // ✅ Get search safely & reactively
  const search = useMemo(() => {
    const query = new URLSearchParams(location.search);
    return query.get("search") || "";
  }, [location.search]);

  // ✅ Fetch data
  useEffect(() => {
    axios
      .get("https://athulsathya.github.io/host_api2/food.json")
      .then((res) => {
        setFoods(res.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // ✅ Filtering logic (clean + safe)
  let filteredFoods = foods;

  // Category filter
  if (category !== "All") {
    filteredFoods = filteredFoods.filter((item) => item.category === category);
  }

  // Search filter
  if (search.trim() !== "") {
    filteredFoods = filteredFoods.filter((item) =>
      item?.name?.toLowerCase().includes(search.toLowerCase()),
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 p-6">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        🍽️ Explore Delicious Food
      </h1>

      {/* Search text */}
      {search && (
        <p className="text-center text-gray-600 mb-5">
          Search Results for:
          <span className="font-semibold text-orange-500 ml-1">{search}</span>
        </p>
      )}

      {/* Category Buttons */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {[
          "All",
          "Breakfast",
          "Snacks",
          "Lunch",
          "Dinner",
          "Dessert",
          "Beverages",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium transition-all duration-300 shadow-sm border
            ${
              category === cat
                ? "bg-gradient-to-r from-orange-500 to-red-500 text-white scale-105 shadow-lg"
                : "bg-white text-gray-700 hover:bg-orange-100 hover:scale-105"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading ? (
        <div className="text-center text-lg font-medium text-gray-600">
          Loading delicious food...
        </div>
      ) : filteredFoods.length === 0 ? (
        <div className="text-center text-red-500 font-medium">
          No items found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredFoods.map((item) => (
            <div
              key={item.id}
              className="transform hover:scale-105 transition-all duration-300"
            >
              <Foodcard item={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodList;
