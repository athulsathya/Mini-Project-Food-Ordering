import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for desktop */}
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex md:hidden">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>
          <div className="relative flex flex-col w-64 bg-white shadow-lg">
            <button
              className="self-end m-4 text-gray-600 hover:text-gray-800"
              onClick={() => setSidebarOpen(false)}
            >
              ✕
            </button>
            <AdminSidebar />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar toggleSidebar={() => setSidebarOpen(true)} />

        {/* Page content */}
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
