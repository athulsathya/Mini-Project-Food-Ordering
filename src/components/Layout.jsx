import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <Navbar />

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
