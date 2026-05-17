import React from "react";
import { assets, menu_list } from "../assets/assets";
import { Link } from "react-router-dom";

function About() {
  const featuredItems = menu_list.slice(0, 6);

  return (
    <div className="bg-[#fffaf5] text-[#4b3829] overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[75vh] bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${assets.headerImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
          <div className="max-w-2xl text-white">
            <p className="uppercase tracking-[4px] text-orange-300 font-semibold mb-3">
              Welcome To FoodOra
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Delicious Meals <br />
              For Every Time Of Day
            </h1>

            <p className="mt-6 text-lg text-gray-200 leading-relaxed">
              From energizing breakfasts to satisfying dinners, tasty snacks,
              refreshing beverages, and sweet desserts — FoodOra has everything
              you crave in one place.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link to="/menu">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold transition">
                  Explore Menu
                </button>
              </Link>

              <Link to="/contact">
                <button className="border border-white px-7 py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
              Our Story
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Fresh Food,
              <br />
              Great Moments
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              FoodOra was created to make delicious food accessible anytime.
              Whether it’s a healthy breakfast, quick lunch, evening snacks,
              hearty dinner, or dessert cravings — we deliver joy to your table.
            </p>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Every dish is prepared with fresh ingredients, authentic taste,
              and quality service you can trust.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-orange-500">6</h3>
              <p className="mt-2 text-gray-600">Food Categories</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-orange-500">50K+</h3>
              <p className="mt-2 text-gray-600">Happy Customers</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-orange-500">100+</h3>
              <p className="mt-2 text-gray-600">Popular Dishes</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
              <h3 className="text-4xl font-bold text-orange-500">24/7</h3>
              <p className="mt-2 text-gray-600">Fast Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-white px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
              Our Categories
            </p>

            <h2 className="text-3xl md:text-5xl font-bold">
              Explore What We Serve
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Start your day with breakfast, enjoy lunch, grab snacks, relax
              with dinner, and finish with desserts & beverages.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((menu, index) => (
              <div
                key={index}
                className="group bg-[#fffaf5] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={menu.menu_image}
                    alt={menu.menu_name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold">{menu.menu_name}</h3>
                  <p className="text-gray-600 mt-2">
                    Fresh and tasty {menu.menu_name.toLowerCase()} options for
                    you.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-orange-500 font-semibold uppercase tracking-widest mb-3">
            Why FoodOra
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-14">
            What Makes Us Special
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl mb-3">🍳</h3>
              <h4 className="font-bold text-xl">Meals All Day</h4>
              <p className="text-gray-600 mt-3">
                Breakfast, lunch, dinner, snacks and more anytime.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl mb-3">⚡</h3>
              <h4 className="font-bold text-xl">Quick Delivery</h4>
              <p className="text-gray-600 mt-3">
                Fresh food delivered fast to your doorstep.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
              <h3 className="text-2xl mb-3">⭐</h3>
              <h4 className="font-bold text-xl">Quality Taste</h4>
              <p className="text-gray-600 mt-3">
                Delicious recipes made with premium ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          Hungry? We’ve Got You Covered
        </h2>

        <p className="mt-4 text-lg text-orange-100">
          Order breakfast, lunch, dinner, desserts, snacks and drinks now.
        </p>

        <Link to="/menu">
          <button className="mt-8 bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition">
            Order Now
          </button>
        </Link>
      </section>
    </div>
  );
}

export default About;
