import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
    { name: "Orders", path: "/orders" },
    { name: "Privacy", path: "/privacy" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/home">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-800">
            Food<span className="text-orange-500">Ora</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">

          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition duration-300 ${
                location.pathname === item.path
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              }`}
            >
              {item.name}
            </Link>
          ))}

        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Search */}
          <div className="relative">
            <input
              type="search"
              placeholder="Search food..."
              className="w-52 pl-4 pr-10 py-2 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
            />
            <span className="absolute right-4 top-2.5 text-gray-400">🔍</span>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-semibold transition"
          >
            🛒 Cart
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-gray-700"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-md px-6 py-5 space-y-3">

          {/* Search */}
          <input
            type="search"
            placeholder="Search food..."
            className="w-full px-4 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          />

          {/* Mobile Links */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition ${
                location.pathname === item.path
                  ? "bg-orange-500 text-white"
                  : "hover:bg-orange-50 hover:text-orange-500 text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Cart */}
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
          >
            🛒 View Cart
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
