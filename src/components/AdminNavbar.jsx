import React from "react";
import { Menu, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminNavbar({ toggleSidebar }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token / auth data
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md flex items-center justify-between px-4 py-3 md:px-6">
      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 hover:text-gray-900"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Logo / title */}
      <div className="text-lg font-semibold text-[#5a4634]">
        Admin Dashboard
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </nav>
  );
}

export default AdminNavbar;
