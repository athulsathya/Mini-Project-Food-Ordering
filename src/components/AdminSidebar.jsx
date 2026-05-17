import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Menu } from "lucide-react"; // hamburger icon
import { NavLink } from "react-router-dom";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden w-full bg-amber-100 shadow-md flex justify-between items-center px-4 py-3">
        <h2 className="text-lg font-bold text-amber-900">Admin Panel</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="w-6 h-6 text-amber-900" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 z-40 w-60 h-full bg-gradient-to-b from-amber-100 to-amber-200 text-amber-900 shadow-lg rounded-r-2xl 
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="p-5">
          <h2 className="text-xl font-bold mb-6 hidden md:block">
            Admin Panel
          </h2>

          <div className="flex flex-col space-y-3">
            {/* Add Items */}
            <NavLink
              to="add"
              onClick={handleLinkClick}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-300 cursor-pointer transition"
            >
              <img src={assets.addIcon} alt="add-icon" className="w-6 h-6" />
              <p className="text-base">Add Items</p>
            </NavLink>

            {/* List Items */}
            <NavLink
              to="list"
              onClick={handleLinkClick}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-300 cursor-pointer transition"
            >
              <img src={assets.orderIcon} alt="list-icon" className="w-6 h-6" />
              <p className="text-base">List Items</p>
            </NavLink>

            {/* Orders */}
            <NavLink
              to="Orders"
              onClick={handleLinkClick}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-amber-300 cursor-pointer transition"
            >
              <img src={assets.addIcon} alt="orders-icon" className="w-6 h-6" />
              <p className="text-base">Orders</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;
