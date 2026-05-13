import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/FoodSlice";

function Foodcard({ item }) {
  const dispatch = useDispatch();

  if (!item) return null;

  const fullStars = Math.floor(item.rating || 0);
  const hasHalfStar = item.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="bg-white rounded-xl shadow-md p-3">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full object-cover rounded-lg"
      />

      <h2 className="font-semibold mt-2">{item.name}</h2>

      <p className="text-orange-500">₹{item.price}</p>

      {/* Rating Stars */}
      <div className="flex items-center gap-1 text-yellow-500">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={"full-" + i} />
        ))}

        {hasHalfStar && <FaStarHalfAlt />}

        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={"empty-" + i} />
        ))}

        <span className="text-gray-600 ml-1 text-sm">({item.rating})</span>
      </div>

      <p className="text-sm text-gray-600 mt-1">{item.description}</p>

      <button
        onClick={() => dispatch(addToCart(item))}
        className="mt-2 bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Foodcard;
