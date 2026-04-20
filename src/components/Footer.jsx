import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Foodie</h2>
          <p className="text-sm leading-relaxed">
            Delivering delicious food to your doorstep. Experience the best
            meals from top restaurants near you.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <div className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 cursor-pointer transition">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 cursor-pointer transition">
              <FaInstagram />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 cursor-pointer transition">
              <FaTwitter />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-orange-500 cursor-pointer transition">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">Menu</li>
            <li className="hover:text-orange-400 cursor-pointer">Cart</li>
            <li className="hover:text-orange-400 cursor-pointer">Orders</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Careers</li>
            <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-orange-400 cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 Kerala, India</p>
          <p className="text-sm mt-1">📞 +91 98765 43210</p>
          <p className="text-sm mt-1">📧 support@foodie.com</p>

          {/* App Buttons */}
          <div className="mt-4 space-y-2">
            <button className="w-full bg-gray-800 py-2 rounded-lg hover:bg-gray-700 text-sm">
              📱 Download on Play Store
            </button>
            <button className="w-full bg-gray-800 py-2 rounded-lg hover:bg-gray-700 text-sm">
              🍎 Download on App Store
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Foodie. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;