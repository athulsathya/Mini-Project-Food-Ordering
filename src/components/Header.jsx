import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Header() {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-[50vh] sm:h-[45vh] md:h-[34vw] w-full flex items-center justify-center text-center bg-cover bg-center shadow-lg"
      style={{ backgroundImage: `url(${assets.headerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-lg sm:max-w-2xl px-4 sm:px-6 py-4 sm:py-6 rounded-xl">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-3 sm:mb-4">
          Order your favourite food here
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-white/90 mb-4 sm:mb-6 leading-relaxed px-2 sm:px-0">
          This menu offers delicious Kerala dishes, from spicy meals to sweet
          desserts and refreshing drinks.
        </p>
        <button
          className="bg-white text-amber-900 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 font-semibold rounded-lg shadow-md hover:bg-amber-100 transition"
          onClick={() => navigate("/menu")}
        >
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
