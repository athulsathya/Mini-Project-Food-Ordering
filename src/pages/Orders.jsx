import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/FoodSlice";

function Orders() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart?.addedFoods || []
  );

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(savedOrders);
  }, []);

  const placeOrder = () => {
    if (cartItems.length === 0) return;

    const total = cartItems.reduce(
      (sum, item) =>
        sum + (item.price || 0) * (item.quantity || 1),
      0
    );

    const newOrder = {
      id: Date.now(),
      items: cartItems,
      total,
      date: new Date().toISOString(),
      status: "Placed",
    };

    const updatedOrders = [...orders, newOrder];

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <h1 className="text-3xl font-bold mb-6">
          🧾 Orders & Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT - CART */}
          <div className="lg:col-span-2 bg-white p-5 rounded-xl shadow">

            <h2 className="text-xl font-bold mb-4">
              Current Cart
            </h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">
                Your cart is empty 🍽️
              </p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between py-3 border-b"
                >
                  <div>
                    <p className="font-semibold">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))
            )}

          </div>

          {/* RIGHT - SUMMARY */}
          <div className="bg-white p-5 rounded-xl shadow h-fit">

            <h2 className="text-xl font-bold mb-4">
              Order Summary
            </h2>

            <p className="text-gray-600 mb-4">
              {cartItems.length} items in cart
            </p>

            <button
              onClick={placeOrder}
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Place Order
            </button>

            <p className="text-xs text-gray-400 mt-2">
              Your order will be saved in history
            </p>

          </div>

        </div>

        {/* ORDER HISTORY */}
        <div className="mt-10">

          <h2 className="text-xl font-bold mb-4">
            Order History
          </h2>

          {orders.length === 0 ? (
            <div className="bg-white p-6 rounded-xl shadow text-gray-500">
              No orders yet 📦
            </div>
          ) : (
            <div className="space-y-4">

              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-white p-5 rounded-xl shadow"
                >

                  {/* TOP */}
                  <div className="flex justify-between items-center">

                    <p className="font-semibold">
                      Order #{order.id}
                    </p>

                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                      {order.status}
                    </span>

                  </div>

                  <p className="text-sm text-gray-500 mt-1">
                    {new Date(order.date).toLocaleString()}
                  </p>

                  {/* ITEMS */}
                  <div className="mt-3 space-y-1 text-sm text-gray-700">
                    {order.items.map((item) => (
                      <p key={item.id}>
                        • {item.name} × {item.quantity}
                      </p>
                    ))}
                  </div>

                  {/* TOTAL */}
                  <p className="mt-3 font-bold text-lg">
                    Total: ₹{order.total}
                  </p>

                </div>
              ))}

            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Orders;