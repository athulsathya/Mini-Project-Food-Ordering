import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">🍔 FoodAura</h2>
          <p className="text-sm">
            Delivering happiness with every bite. Fresh, fast, and delicious
            food at your doorstep.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/home" className="hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-orange-400">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/order" className="hover:text-orange-400">
                Orders
              </Link>
            </li>
            <li>
              <Link to="/contactUs" className="hover:text-orange-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/feedback" className="hover:text-orange-400">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-orange-400">
                Login
              </Link>
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-orange-400 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 Trivandrum, Kerala</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ support@foodaura.com</p>

          <div className="flex gap-3 mt-3 text-lg">
            <span className="hover:text-orange-400 cursor-pointer">🌐</span>
            <span className="hover:text-orange-400 cursor-pointer">📘</span>
            <span className="hover:text-orange-400 cursor-pointer">📸</span>
            <span className="hover:text-orange-400 cursor-pointer">🐦</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} FoodAura. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
