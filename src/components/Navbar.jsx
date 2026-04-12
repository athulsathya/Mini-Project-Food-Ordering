import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-lg shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <h2 className="text-2xl font-extrabold tracking-wide text-gray-800">
          Food<span className="text-orange-500">Aura</span>
        </h2>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/home" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/cart" className="nav-link flex items-center gap-1">🛒 Cart</Link>
          <Link to="/orders" className="nav-link">Orders</Link>
          <Link to="/privacy" className="nav-link">Privacy</Link>

          <input
            type="search"
            placeholder="Search food..."
            className="px-3 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          />
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-sm font-medium bg-white/90 backdrop-blur-md">
          <Link to="/home" className="mobile-link">Home</Link>
          <Link to="/about" className="mobile-link">About</Link>
          <Link to="/contact" className="mobile-link">Contact</Link>
          <Link to="/menu" className="mobile-link">Menu</Link>
          <Link to="/cart" className="mobile-link">🛒 Cart</Link>
          <Link to="/orders" className="mobile-link">Orders</Link>
          <Link to="/privacy" className="mobile-link">Privacy</Link>

          <input
            type="search"
            placeholder="Search food..."
            className="mt-2 px-3 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      )}

      <style>
        {`
          .nav-link {
            padding: 8px 12px;
            border-radius: 8px;
            transition: all 0.3s;
          }
          .nav-link:hover {
            background-color: #fff7ed;
            color: #f97316;
          }
          .mobile-link {
            padding: 10px;
            border-radius: 6px;
          }
          .mobile-link:hover {
            background-color: #fff7ed;
            color: #f97316;
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
