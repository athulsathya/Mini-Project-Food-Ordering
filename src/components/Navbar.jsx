import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cartCount = useSelector(
    (state) =>
      state.cart?.addedFoods?.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0
      ) || 0
  );

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Menu", path: "/menu" },
    { name: "Orders", path: "/orders" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      console.log("Searching:", searchTerm);
    }
  };

  const activeClass =
    "text-white bg-orange-500 shadow-sm";

  const normalClass =
    "text-gray-700 hover:text-orange-500 hover:bg-orange-50";

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center text-lg font-bold shadow-md">
            F
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
              Food<span className="text-orange-500">Ora</span>
            </h1>
            <p className="text-[11px] text-gray-400 -mt-1">
              Fresh • Fast • Premium
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                location.pathname === item.path
                  ? activeClass
                  : normalClass
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="relative"
          >
            <input
              type="search"
              placeholder="Search foods..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-56 pl-4 pr-10 py-2.5 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
            />

            <button
              type="submit"
              className="absolute right-3 top-2.5 text-gray-400 hover:text-orange-500"
            >
              🔍
            </button>
          </form>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative px-5 py-2.5 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition"
          >
            🛒 Cart

            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

          {/* Auth */}
          <Link
            to="/login"
            className="font-semibold text-gray-700 hover:text-orange-500 transition"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="px-5 py-2.5 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition shadow-sm"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl text-gray-700"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-3 shadow-md">
          {/* Search */}
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search foods..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="w-full px-4 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
            />
          </form>

          {/* Links */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl font-semibold transition ${
                location.pathname === item.path
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-orange-50 hover:text-orange-500"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* Cart */}
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-gray-900 text-white py-3 rounded-xl font-semibold"
          >
            🛒 View Cart ({cartCount})
          </Link>

          {/* Auth */}
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block text-center border border-orange-500 text-orange-500 py-3 rounded-xl font-semibold"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-orange-500 text-white py-3 rounded-xl font-semibold"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;