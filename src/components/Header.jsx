import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function Header() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[70vh] md:min-h-[42vw] w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${assets.headerImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="max-w-3xl text-white">

          {/* Tag */}
          <p className="inline-block bg-orange-500/90 px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-5">
            Fresh • Fast • Delicious
          </p>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight drop-shadow-lg">
            Taste Every Moment <br />
            With <span className="text-orange-400">FoodOra</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
            Start your day with Breakfast, enjoy flavorful Lunch,
            grab tasty Snacks, relax with Dinner, and complete it
            with Desserts & Refreshing Beverages.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => navigate("/menu")}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
            >
              Explore Menu
            </button>

            <button
              onClick={() => navigate("/about")}
              className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Learn More
            </button>
          </div>

          {/* Quick Categories */}
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
              🍳 Breakfast
            </span>
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
              🍛 Lunch
            </span>
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
              🍟 Snacks
            </span>
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
              🍽 Dinner
            </span>
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
              🍰 Desserts
            </span>
            <span className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm">
              🥤 Beverages
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Header;
