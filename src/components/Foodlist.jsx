import React, { useEffect, useState } from "react";
import axios from "axios";
import Foodcard from "./Foodcard";

function FoodList() {
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://athulsathya.github.io/host_api2/food.json")
      .then((res) => {
        setFoods(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredFoods =
    category === "All"
      ? foods
      : foods.filter((item) => item.category === category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 p-6">

      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        🍽️ Explore Delicious Food
      </h1>

      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {["All", "Breakfast", "Snacks", "Lunch", "Dinner", "Dessert", "Beverages"].map((cat) => (
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