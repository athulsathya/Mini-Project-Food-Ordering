import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({
    customerName: "",
    items: "",
    total: ""
  });

  // Load orders from localStorage
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  // Handle input changes
  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Add new order
  const addOrder = (e) => {
    e.preventDefault();
    if (!form.customerName || !form.items || !form.total) {
      toast.error("Please fill all fields");
      return;
    }

    const newOrder = {
      id: Date.now(),
      customerName: form.customerName,
      items: form.items
        .split(",")
        .map((item) => {
          const [name, quantity] = item.trim().split("x");
          return { name: name.trim(), quantity: Number(quantity) || 1 };
        }),
      total: Number(form.total),
      date: new Date().toISOString()
    };

    const updatedOrders = [...orders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    toast.success("Order added!");
    setForm({ customerName: "", items: "", total: "" });
  };

  // Delete order
  const removeOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    setOrders(updatedOrders);
    toast.success("Order deleted!");
  };

  // Helper to render items
  const renderItems = (items) => {
    if (Array.isArray(items)) {
      return items.map((i, idx) => (
        <p key={idx}>
          {i.name} x{i.quantity}
        </p>
      ));
    } else if (typeof items === "object" && items !== null) {
      return Object.entries(items).map(([name, quantity], idx) => (
        <p key={idx}>
          {name} x{quantity}
        </p>
      ));
    } else {
      return <p>No items</p>;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f5f0] p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Customer Orders
      </h2>

      {/* Add Order Form */}
      <form
        onSubmit={addOrder}
        className="bg-white p-6 rounded-lg shadow mb-6 max-w-md mx-auto space-y-4"
      >
        <input
          name="customerName"
          value={form.customerName}
          onChange={onChange}
          placeholder="Customer Name"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9c7b1]"
        />
        <input
          name="items"
          value={form.items}
          onChange={onChange}
          placeholder="Items (e.g. Dosa x2, Tea x1)"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9c7b1]"
        />
        <input
          name="total"
          value={form.total}
          onChange={onChange}
          placeholder="Total Price"
          type="number"
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9c7b1]"
        />
        <button
          type="submit"
          className="w-full bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-2 rounded transition"
        >
          Add Order
        </button>
      </form>

      {/* Orders List */}
      <div className="overflow-x-auto">
        {/* Desktop Table Header */}
        <div className="hidden md:grid grid-cols-5 bg-[#d9c7b1] text-white font-semibold p-4 rounded-t-xl">
          <p>Customer</p>
          <p>Items</p>
          <p>Total</p>
          <p>Date</p>
          <p>Action</p>
        </div>

        <div className="divide-y divide-[#e6dcd0]">
          {orders.length === 0 ? (
            <p className="text-center py-6 text-gray-500">No orders</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 hover:bg-[#f5efe6] transition rounded-lg"
              >
                {/* Customer */}
                <p className="font-medium text-[#5a4634]">{order.customerName}</p>

                {/* Items */}
                <div>{renderItems(order.items)}</div>

                {/* Total */}
                <p className="text-[#8b5e3c] font-semibold">₹{order.total}</p>

                {/* Date */}
                <p className="text-gray-500 text-sm">
                  {new Date(order.date).toLocaleString()}
                </p>

                {/* Action */}
                <div className="flex justify-start md:justify-center mt-2 md:mt-0">
                  <button
                    onClick={() => removeOrder(order.id)}
                    className="bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-1 px-3 rounded w-full md:w-auto transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;