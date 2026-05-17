import React from "react";
import { useSelector } from "react-redux";

function CustomerOrders() {
  const orders = useSelector((state) => state.cart.orders);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6 md:p-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">📦 Your Orders</h1>
        <p className="text-gray-500 mt-1">
          Track all your recent purchases in one place
        </p>
      </div>

      {/* Empty State */}
      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-lg font-medium">No orders placed yet</p>
          <p className="text-sm">Your order history will appear here</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-800">
                    Order #{order.id}
                  </h2>
                  <p className="text-sm text-gray-500">{order.date}</p>
                </div>

                {/* Status Badge */}
                <span
                  className={`mt-2 md:mt-0 px-3 py-1 text-sm rounded-full font-medium w-fit
                  ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Items */}
              <div className="divide-y divide-gray-100 border-t border-b">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between py-3">
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold text-gray-700">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="flex justify-between mt-4 pt-3">
                <span className="text-gray-600 font-medium">Total Amount</span>
                <span className="text-xl font-bold text-orange-600">
                  ₹{order.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomerOrders;
