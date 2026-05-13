import React from "react";
import { Menu } from "lucide-react"; // or any hamburger icon

function AdminNavbar({ toggleSidebar }) {
  return (
    <nav className="bg-white shadow-md flex items-center justify-between px-4 py-3 md:px-6">
      {/* Mobile hamburger */}
      <div className="md:hidden">
        <button onClick={toggleSidebar} className="text-gray-700 hover:text-gray-900">
          <Menu size={24} />
        </button>
      </div>

      {/* Logo / title */}
      <div className="text-lg font-semibold text-[#5a4634]">
        Admin Dashboard
      </div>

      {/* Desktop right-side items (optional) */}
      <div className="hidden md:flex items-center space-x-4">
        {/* You can add notifications, profile dropdown, etc. here */}
      </div>
    </nav>
  );
}

export default AdminNavbar;