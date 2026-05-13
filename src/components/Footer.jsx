import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 mt-16">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Food<span className="text-orange-500">Ora</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            Bringing delicious meals to your doorstep. From Breakfast to Dinner,
            Snacks to Desserts — enjoy fresh food anytime with fast delivery and
            premium taste.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-6">
            {[
              <FaFacebookF />,
              <FaInstagram />,
              <FaTwitter />,
              <FaLinkedinIn />,
            ].map((icon, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 cursor-pointer transition duration-300"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/home" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-orange-400 transition">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/menu" className="hover:text-orange-400 transition">
                Menu
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-orange-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Categories</h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-orange-400 transition cursor-pointer">
              Breakfast
            </li>
            <li className="hover:text-orange-400 transition cursor-pointer">
              Lunch
            </li>
            <li className="hover:text-orange-400 transition cursor-pointer">
              Snacks
            </li>
            <li className="hover:text-orange-400 transition cursor-pointer">
              Dinner
            </li>
            <li className="hover:text-orange-400 transition cursor-pointer">
              Desserts
            </li>
            <li className="hover:text-orange-400 transition cursor-pointer">
              Beverages
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-5">Contact Us</h3>

          <div className="space-y-3 text-sm text-gray-400">
            <p>📍 Kerala, India</p>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@foodora.com</p>
          </div>

          {/* Subscribe */}
          <div className="mt-6">
            <p className="text-white text-sm font-medium mb-3">
              Subscribe Newsletter
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none text-sm"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-4 rounded-r-lg text-white text-sm font-medium transition">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} FoodOra. All Rights Reserved.</p>

          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-orange-400 transition">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-orange-400 transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
