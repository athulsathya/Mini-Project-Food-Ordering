import React from "react";

function Foodcard({ item }) {
  if (!item) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-3">
      <img src={item.image} alt={item.name} className="h-40 w-full object-cover rounded-lg" />
      <h2 className="font-semibold mt-2">{item.name}</h2>
      <p className="text-orange-500">₹{item.price}</p>
      <p>{item.rating}</p>
      <p>{item.description}</p>
    </div>
  );
}

export default Foodcard;