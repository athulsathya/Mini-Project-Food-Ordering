import React, { useState } from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Add() {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Breakfast",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = {
      id: Date.now(),
      name: data.name,
      description: data.description,
      price: Number(data.price),
      category: data.category,
      image: image ? URL.createObjectURL(image) : null,
    };

    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];
    existingProducts.push(formData);
    localStorage.setItem("products", JSON.stringify(existingProducts));

    toast.success("Your data saved in Local Storage");

    // Reset form
    setData({ name: "", description: "", price: "", category: "Breakfast" });
    setImage(null);
  };

  return (
    <div className="min-h-screen bg-[#f5efe6] flex items-center justify-center p-4">
      <form
        onSubmit={onSubmitHandler}
        className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 sm:p-8 md:p-10 space-y-6"
      >
        {/* Upload Image */}
        <div className="flex flex-col items-center">
          <p className="text-[#8b5e3c] font-semibold mb-2 text-center">
            Upload Image
          </p>
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={image ? URL.createObjectURL(image) : assets.uploadArea}
              alt="uploadArea"
              className="w-40 h-40 sm:w-48 sm:h-48 object-cover rounded-lg border-2 border-dashed border-[#d9c7b1] p-2"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>

        {/* Product Name */}
        <div className="flex flex-col">
          <p className="text-[#8b5e3c] font-semibold mb-2">Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here"
            className="border border-[#d9c7b1] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9c7b1]"
          />
        </div>

        {/* Product Description */}
        <div className="flex flex-col">
          <p className="text-[#8b5e3c] font-semibold mb-2">Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            name="description"
            rows="4"
            placeholder="Write content here"
            className="border border-[#d9c7b1] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9c7b1] resize-none"
          ></textarea>
        </div>

        {/* Category & Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <p className="text-[#8b5e3c] font-semibold mb-2">Product Category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="border border-[#d9c7b1] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9c7b1]"
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Snacks">Snacks</option>
              <option value="Desserts">Desserts</option>
              <option value="Drinks">Drinks</option>
              <option value="Meals">Meals</option>
            </select>
          </div>

          <div className="flex flex-col">
            <p className="text-[#8b5e3c] font-semibold mb-2">Product Price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="₹20"
              className="border border-[#d9c7b1] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#d9c7b1]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#8b5e34] hover:bg-[#6b4423] text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300 w-full sm:w-auto"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;