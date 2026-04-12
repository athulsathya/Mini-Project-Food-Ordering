import React from "react";

function CategoryMenu() {
  return (
    <div className="px-6 py-6">
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
        Find Your Best Food 🍽️
      </h3>

      <div className="flex flex-wrap gap-3">
        <button className="px-4 py-2 rounded-full bg-orange-500 text-white shadow-sm hover:scale-105 transition-all duration-300">
          All
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-500 hover:scale-105 transition-all duration-300">
          Breakfast
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-500 hover:scale-105 transition-all duration-300">
          Snacks
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-500 hover:scale-105 transition-all duration-300">
          Lunch
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-500 hover:scale-105 transition-all duration-300">
          Dinner
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-500 hover:scale-105 transition-all duration-300">
          Dessert
        </button>

        <button className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-500 hover:scale-105 transition-all duration-300">
          Beverages
        </button>
      </div>
    </div>
  );
}

export default CategoryMenu;
