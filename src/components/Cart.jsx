import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from "../redux/FoodSlice";

function Cart() {
  const dispatch = useDispatch();

  // SAFE selector
  const addedFoods = useSelector((state) => state.cart?.addedFoods || []);

  // total price
  const totalPrice = addedFoods.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0,
  );

  // total quantity
  const totalItems = addedFoods.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">🛒 Your Cart</h1>

        {addedFoods.length > 0 && (
          <p className="text-gray-500 mb-6">
            {totalItems} item(s) in your cart
          </p>
        )}

        {addedFoods.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h2 className="text-xl font-semibold text-gray-600">
              Your cart is empty
            </h2>
            <p className="text-gray-400 mt-2">Add delicious food items 🍕</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT - ITEMS */}
            <div className="flex-1 space-y-4">
              {addedFoods.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl shadow flex items-center justify-between"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>

                    <p className="text-gray-500">₹{item.price}</p>

                    <p className="text-sm text-gray-400">
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>

                  {/* CONTROLS */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => dispatch(decreaseQty(item.id))}
                      className="w-8 h-8 bg-gray-200 rounded"
                    >
                      -
                    </button>

                    <span className="font-semibold">{item.quantity}</span>

                    <button
                      onClick={() => dispatch(increaseQty(item.id))}
                      className="w-8 h-8 bg-green-500 text-white rounded"
                    >
                      +
                    </button>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="ml-3 text-red-500 text-sm font-semibold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-80 bg-white p-5 rounded-xl shadow h-fit sticky top-5">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              <div className="flex justify-between mb-2">
                <span>Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between mb-4 font-bold">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>

              <button
                onClick={() => dispatch(clearCart())}
                className="w-full bg-red-500 text-white py-2 rounded-lg mb-2"
              >
                Clear Cart
              </button>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
