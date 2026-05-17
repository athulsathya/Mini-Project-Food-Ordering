import React, { useState } from "react";

import { assets } from "../assets/assets";

import { FaCloudUploadAlt, FaRupeeSign } from "react-icons/fa";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function Add() {
  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Breakfast",
  });

  // Input Change
  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // Validation
    if (!data.name || !data.description || !data.price || !image) {
      toast.error("Please fill all fields");
      return;
    }

    // Product Object
    const productData = {
      id: Date.now(),

      name: data.name,

      description: data.description,

      price: Number(data.price),

      category: data.category,

      image: image ? URL.createObjectURL(image) : null,
    };

    // Local Storage
    const existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    existingProducts.push(productData);

    localStorage.setItem("products", JSON.stringify(existingProducts));

    toast.success("Product Added Successfully");

    // Reset
    setData({
      name: "",
      description: "",
      price: "",
      category: "Breakfast",
    });

    setImage(null);
  };

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-orange-50
        via-white
        to-orange-100
        flex
        items-center
        justify-center
        p-4
      "
    >
      <form
        onSubmit={onSubmitHandler}
        className="
          w-full
          max-w-3xl
          bg-white
          rounded-3xl
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Header */}
        <div
          className="
            bg-orange-500
            px-8
            py-6
            text-white
          "
        >
          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Add New Product
          </h1>

          <p className="text-orange-100 mt-1">
            Add delicious food items to your menu
          </p>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">
          {/* Upload */}
          <div className="flex flex-col items-center">
            <label
              htmlFor="image"
              className="
                relative
                cursor-pointer
                group
              "
            >
              <img
                src={image ? URL.createObjectURL(image) : assets.uploadIcon}
                alt="upload"
                className="
                  w-52
                  h-52
                  object-cover
                  rounded-2xl
                  border-2
                  border-dashed
                  border-orange-300
                  p-2
                  shadow-md
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/40
                  opacity-0
                  group-hover:opacity-100
                  transition
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-white
                  text-4xl
                "
              >
                <FaCloudUploadAlt />
              </div>
            </label>

            <input
              type="file"
              id="image"
              hidden
              required
              onChange={(e) => setImage(e.target.files[0])}
            />

            <p
              className="
                mt-4
                text-gray-600
                text-sm
              "
            >
              Upload Product Image
            </p>
          </div>

          {/* Product Name */}
          <div>
            <label
              className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
              "
            >
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onChangeHandler}
              placeholder="Enter product name"
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-5
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
                transition
              "
            />
          </div>

          {/* Description */}
          <div>
            <label
              className="
                block
                text-sm
                font-semibold
                text-gray-700
                mb-2
              "
            >
              Product Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={data.description}
              onChange={onChangeHandler}
              placeholder="Write product description..."
              className="
                w-full
                border
                border-gray-200
                rounded-xl
                px-5
                py-3
                resize-none
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
                transition
              "
            ></textarea>
          </div>

          {/* Category & Price */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Category */}
            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                Category
              </label>

              <select
                name="category"
                value={data.category}
                onChange={onChangeHandler}
                className="
                  w-full
                  border
                  border-gray-200
                  rounded-xl
                  px-5
                  py-3
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-400
                "
              >
                <option value="Breakfast">Breakfast</option>

                <option value="Snacks">Snacks</option>

                <option value="Desserts">Desserts</option>

                <option value="Drinks">Drinks</option>

                <option value="Meals">Meals</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label
                className="
                  block
                  text-sm
                  font-semibold
                  text-gray-700
                  mb-2
                "
              >
                Price
              </label>

              <div className="relative">
                <FaRupeeSign
                  className="
                    absolute
                    left-4
                    top-4
                    text-gray-500
                  "
                />

                <input
                  type="number"
                  name="price"
                  value={data.price}
                  onChange={onChangeHandler}
                  placeholder="Enter price"
                  className="
                    w-full
                    border
                    border-gray-200
                    rounded-xl
                    pl-10
                    pr-4
                    py-3
                    focus:outline-none
                    focus:ring-2
                    focus:ring-orange-400
                  "
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-bold
              py-4
              rounded-2xl
              transition-all
              duration-300
              shadow-lg
              hover:shadow-orange-300/40
            "
          >
            ADD PRODUCT
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
