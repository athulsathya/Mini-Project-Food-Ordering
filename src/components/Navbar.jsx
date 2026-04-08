import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <h2 className="text-2xl font-extrabold tracking-wide text-gray-800 mb-4">
          Food<span className="text-orange-500">Aura</span>
        </h2>

        <div className="flex flex-row gap-6 items-center text-sm font-medium">
          <Link
            to="/home"
            className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-500 transition"
          >
            Home
          </Link>

          <Link
            to="/menu"
            className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-500 transition"
          >
            Menu
          </Link>

          <Link
            to="/contact"
            className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-500 transition"
          >
            Contact
          </Link>

          <Link
            to="/orders"
            className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-500 transition"
          >
            Orders
          </Link>

          <Link
            to="/cart"
            className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-500 transition flex items-center gap-2"
          >
            🛒 Cart
          </Link>

          <Link
            to="/feedback"
            className="px-3 py-2 rounded-md hover:bg-orange-50 hover:text-orange-500 transition"
          >
            Feedback
          </Link>

          <Link to="/login">
            <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow-sm transition">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
