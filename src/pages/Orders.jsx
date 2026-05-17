import React, { useEffect, useState } from "react";

import {
  FaShoppingBag,
  FaTrash,
  FaRupeeSign,
  FaClock,
  FaClipboardList,
} from "react-icons/fa";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  const [form, setForm] = useState({
    customerName: "",
    items: "",
    total: "",
  });

  // LOAD ORDERS
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(storedOrders);
  }, []);

  // HANDLE INPUT
  const onChange = (e) =>
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  // ADD ORDER
  const addOrder = (e) => {
    e.preventDefault();

    if (!form.customerName || !form.items || !form.total) {
      toast.error("Please fill all fields");
      return;
    }

    const newOrder = {
      id: Date.now(),

      customerName: form.customerName,

      items: form.items.split(",").map((item) => {
        const [name, quantity] = item.trim().split("x");

        return {
          name: name.trim(),
          quantity: Number(quantity) || 1,
        };
      }),

      total: Number(form.total),

      date: new Date().toISOString(),

      status: "Pending",
    };

    const updatedOrders = [...orders, newOrder];

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setOrders(updatedOrders);

    toast.success("Order Added Successfully");

    setForm({
      customerName: "",
      items: "",
      total: "",
    });
  };

  // DELETE ORDER
  const removeOrder = (id) => {
    const updatedOrders = orders.filter((o) => o.id !== id);

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    setOrders(updatedOrders);

    toast.success("Order Deleted");
  };

  // UPDATE STATUS
  const updateStatus = (id, status) => {
    const updatedOrders = orders.map((order) =>
      order.id === id ? { ...order, status } : order,
    );

    setOrders(updatedOrders);

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    toast.success("Status Updated");
  };

  // STATS
  const totalRevenue = orders.reduce((acc, o) => acc + o.total, 0);

  const pendingOrders = orders.filter((o) => o.status === "Pending").length;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Orders Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Manage customer orders and track delivery status
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {/* TOTAL ORDERS */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
          <div className="bg-orange-100 p-4 rounded-2xl">
            <FaClipboardList className="text-2xl text-orange-500" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Orders</p>

            <h2 className="text-3xl font-bold text-gray-800">
              {orders.length}
            </h2>
          </div>
        </div>

        {/* REVENUE */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
          <div className="bg-green-100 p-4 rounded-2xl">
            <FaRupeeSign className="text-2xl text-green-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">Total Revenue</p>

            <h2 className="text-3xl font-bold text-green-600">
              ₹{totalRevenue}
            </h2>
          </div>
        </div>

        {/* PENDING */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
          <div className="bg-yellow-100 p-4 rounded-2xl">
            <FaClock className="text-2xl text-yellow-600" />
          </div>

          <div>
            <p className="text-gray-500 text-sm">Pending Orders</p>

            <h2 className="text-3xl font-bold text-yellow-600">
              {pendingOrders}
            </h2>
          </div>
        </div>
      </div>

      {/* ADD ORDER FORM */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-5">Add New Order</h2>

        <form
          onSubmit={addOrder}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <input
            name="customerName"
            value={form.customerName}
            onChange={onChange}
            placeholder="Customer Name"
            className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="items"
            value={form.items}
            onChange={onChange}
            placeholder="Burger x2, Tea x1"
            className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            name="total"
            type="number"
            value={form.total}
            onChange={onChange}
            placeholder="Total Amount"
            className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold transition duration-300"
          >
            Add Order
          </button>
        </form>
      </div>

      {/* ORDERS TABLE */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* TABLE HEADER */}
        <div className="hidden md:grid grid-cols-6 bg-gray-900 text-white px-6 py-5 font-semibold">
          <p>Customer</p>
          <p>Items</p>
          <p>Total</p>
          <p>Status</p>
          <p>Date</p>
          <p className="text-center">Action</p>
        </div>

        {/* EMPTY STATE */}
        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="bg-orange-100 p-5 rounded-full mb-4">
              <FaShoppingBag className="text-4xl text-orange-500" />
            </div>

            <h2 className="text-2xl font-bold text-gray-700">
              No Orders Found
            </h2>

            <p className="text-gray-500 mt-2">
              Orders will appear here after customers place them.
            </p>
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center px-6 py-5 border-b hover:bg-orange-50/40 transition duration-300"
            >
              {/* CUSTOMER */}
              <div>
                <h3 className="font-bold text-gray-800">
                  {order.customerName}
                </h3>

                <p className="text-sm text-gray-500">Customer Order</p>
              </div>

              {/* ITEMS */}
              <div className="space-y-1">
                {order.items.map((i, idx) => (
                  <p key={idx} className="text-sm text-gray-600">
                    • {i.name} x{i.quantity}
                  </p>
                ))}
              </div>

              {/* TOTAL */}
              <div className="font-bold text-green-600 text-lg">
                ₹{order.total}
              </div>

              {/* STATUS */}
              <div>
                <select
                  value={order.status}
                  onChange={(e) => updateStatus(order.id, e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option>Pending</option>
                  <option>Preparing</option>
                  <option>Out for Delivery</option>
                  <option>Delivered</option>
                </select>
              </div>

              {/* DATE */}
              <div className="text-sm text-gray-500">
                {new Date(order.date).toLocaleString()}
              </div>

              {/* ACTION */}
              <div className="flex justify-center">
                <button
                  onClick={() => removeOrder(order.id)}
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl font-semibold transition duration-300"
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

export default Orders;
