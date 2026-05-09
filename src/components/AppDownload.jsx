import React from "react";
import { assets } from "../assets/assets";

function AppDownload() {
  return (
    <section className="px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-orange-50 via-white to-orange-100 rounded-3xl shadow-xl overflow-hidden">
        
        <div className="grid md:grid-cols-2 items-center gap-10 p-8 md:p-14">
          
          {/* Left Content */}
          <div className="text-center md:text-left">
            <p className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              Mobile App Available
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Get The Best Food <br />
              Experience With{" "}
              <span className="text-orange-500">FoodOra</span>
            </h2>

            <p className="text-gray-600 mt-5 text-base md:text-lg leading-relaxed">
              Order your favorite meals faster, track deliveries live,
              and enjoy exclusive app-only offers anytime.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-8">
              <img
                src={assets.playStoreImg}
                alt="Play Store"
                className="w-40 cursor-pointer hover:scale-105 hover:shadow-lg transition duration-300"
              />

              <img
                src={assets.appStoreImg}
                alt="App Store"
                className="w-40 cursor-pointer hover:scale-105 hover:shadow-lg transition duration-300"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <div className="bg-white rounded-3xl shadow-2xl p-6 w-72 md:w-80 relative">
              
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-sm px-4 py-2 rounded-full shadow-md">
                30% OFF
              </div>

              <img
                src={assets.headerImg}
                alt="Food App"
                className="rounded-2xl w-full h-64 object-cover"
              />

              <div className="mt-5 text-left">
                <h3 className="text-xl font-bold text-gray-800">
                  Fast Delivery
                </h3>
                <p className="text-gray-500 text-sm mt-2">
                  Hot & fresh meals delivered to your doorstep in minutes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AppDownload