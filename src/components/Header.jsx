import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/home" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src="/logo.jpg"
              alt="FoodAura Logo"
              className="w-12 h-12 rounded-full object-cover border-2 border-orange-500 shadow-md group-hover:scale-110 transition duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-orange-400 opacity-20 blur-md group-hover:opacity-40 transition"></div>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-gray-800 tracking-wide">
              Food<span className="text-orange-500">Aura</span>
            </h2>
            <p className="text-xs text-gray-500 -mt-1">
              Taste the Happiness 🍽️
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <p className="text-gray-500 text-sm italic">
            Fresh • Fast • Delicious
          </p>

          <span className="flex items-center gap-1 bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Open Now
          </span>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-full text-sm shadow-md transition">
            Order Now
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
