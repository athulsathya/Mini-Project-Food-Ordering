import { Link, useLocation, useNavigate } from "react-router-dom";

import { useState, useContext } from "react";

import { useSelector } from "react-redux";

import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const { currentUser, logout } = useContext(AuthContext);

  // Cart Count
  const cartCount = useSelector(
    (state) =>
      state.cart?.addedFoods?.reduce(
        (sum, item) => sum + (item.quantity || 1),
        0,
      ) || 0,
  );

  // Navigation Items
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Menu", path: "/menu" },
    {
      name: "Orders",
      path: "/customer-orders",
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  // Search
  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/menu?search=${searchTerm}`);

      setSearchTerm("");
      setIsOpen(false);
    }
  };

  // Logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Active Class
  const activeClass = "text-white bg-orange-500 shadow-lg shadow-orange-200";

  const normalClass = "text-gray-700 hover:text-orange-500 hover:bg-orange-50";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white flex items-center justify-center text-xl font-bold shadow-md group-hover:scale-105 transition duration-300">
            🍔
          </div>

          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-800">
              Food
              <span className="text-orange-500">Ora</span>
            </h1>

            <p className="text-[11px] text-gray-400 -mt-1 tracking-wide">
              Fresh • Fast • Premium
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border border-gray-200">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                location.pathname === item.path ? activeClass : normalClass
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Search */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="search"
              placeholder="Search foods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64 pl-5 pr-12 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white transition text-sm shadow-sm"
            />

            <button
              type="submit"
              className="absolute right-4 top-3 text-gray-400 hover:text-orange-500 transition"
            >
              🔍
            </button>
          </form>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center gap-2 px-5 py-3 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition shadow-md"
          >
            <span className="text-lg">🛒</span>
            Cart
            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center font-bold border-2 border-white">
              {cartCount}
            </span>
          </Link>

          {/* Auth */}
          {currentUser ? (
            <div className="flex items-center gap-3">
              {/* User */}
              <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100">
                <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                  {currentUser.name?.charAt(0).toUpperCase()}
                </div>

                <p className="font-semibold text-gray-700">
                  {currentUser.name}
                </p>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="px-5 py-2.5 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition shadow-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="font-semibold text-gray-700 hover:text-orange-500 transition"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold hover:opacity-90 transition shadow-md"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-2xl text-gray-700"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-4 shadow-lg">
          {/* Search */}
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="Search foods..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-5 py-3 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
            />
          </form>

          {/* Nav Links */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-2xl font-semibold transition ${
                location.pathname === item.path
                  ? "bg-orange-500 text-white shadow-md"
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
            className="block text-center bg-gray-900 text-white py-3 rounded-2xl font-semibold shadow-md"
          >
            🛒 View Cart ({cartCount})
          </Link>

          {/* Auth */}
          {currentUser ? (
            <>
              <div className="flex items-center gap-3 bg-orange-50 p-3 rounded-2xl">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                  {currentUser.name?.charAt(0).toUpperCase()}
                </div>

                <p className="font-semibold text-gray-700">
                  {currentUser.name}
                </p>
              </div>

              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-3 rounded-2xl font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block text-center border border-orange-500 text-orange-500 py-3 rounded-2xl font-semibold"
              >
                Sign In
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="block text-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-2xl font-semibold shadow-md"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
