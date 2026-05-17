import React, { useEffect, useState } from "react";
import { FaTrash, FaUtensils, FaRupeeSign, FaBoxOpen } from "react-icons/fa";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function List() {
  const [products, setProducts] = useState([]);

  // Load Products
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    try {
      const data = localStorage.getItem("products");

      if (!data) {
        setProducts([]);
        return;
      }

      const parsed = JSON.parse(data);

      if (Array.isArray(parsed)) {
        setProducts(parsed);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.log("Error reading products:", error);
      setProducts([]);
    }
  };

  // Delete Product
  const removeFood = (foodId) => {
    try {
      const stored = JSON.parse(localStorage.getItem("products")) || [];

      const updated = stored.filter((item) => item.id !== foodId);

      localStorage.setItem("products", JSON.stringify(updated));

      setProducts(updated);

      toast.success("Food removed successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove food");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Food Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all food items from your dashboard
          </p>
        </div>

        {/* TOTAL PRODUCTS */}
        <div className="mt-5 md:mt-0 bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-lg flex items-center gap-4">
          <div className="bg-white/20 p-3 rounded-xl">
            <FaBoxOpen className="text-2xl" />
          </div>

          <div>
            <p className="text-sm opacity-80">Total Products</p>

            <h2 className="text-2xl font-bold">{products.length}</h2>
          </div>
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* TABLE HEADER */}
        <div className="hidden md:grid grid-cols-5 bg-gray-900 text-white px-6 py-5 font-semibold text-sm uppercase tracking-wide">
          <p>Food Image</p>
          <p>Food Name</p>
          <p>Category</p>
          <p>Price</p>
          <p className="text-center">Action</p>
        </div>

        {/* EMPTY */}
        {products.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-orange-100 p-5 rounded-full mb-4">
              <FaUtensils className="text-4xl text-orange-500" />
            </div>

            <h2 className="text-2xl font-bold text-gray-700">
              No Products Found
            </h2>

            <p className="text-gray-500 mt-2">
              Add food products to display them here.
            </p>
          </div>
        ) : (
          products.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center px-6 py-5 border-b hover:bg-orange-50/40 transition duration-300"
            >
              {/* IMAGE */}
              <div className="flex justify-center md:justify-start">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-2xl border shadow-sm"
                />
              </div>

              {/* NAME */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Delicious fresh food item
                </p>
              </div>

              {/* CATEGORY */}
              <div className="flex justify-center md:justify-start">
                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                  {item.category}
                </span>
              </div>

              {/* PRICE */}
              <div className="flex items-center justify-center md:justify-start gap-1 text-green-600 font-bold text-lg">
                <FaRupeeSign />
                {item.price}
              </div>

              {/* ACTION */}
              <div className="flex justify-center">
                <button
                  onClick={() => removeFood(item.id)}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md transition duration-300"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default List;
