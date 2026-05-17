import React from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import { assets } from "../assets/assets";

function ContactUs() {
  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-orange-50
        via-white
        to-orange-100
        dark:from-gray-950
        dark:via-gray-900
        dark:to-black
        py-16
        px-4
        md:px-10
      "
    >
      {/* Heading */}
      <div className="text-center mb-14">
        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-gray-800
            dark:text-white
          "
        >
          Contact{" "}
          <span className="text-orange-500">
            FoodOra
          </span>
        </h1>

        <p
          className="
            mt-4
            text-gray-600
            dark:text-gray-300
            max-w-2xl
            mx-auto
          "
        >
          We'd love to hear from you.
          Whether you have a question
          about orders, delivery,
          feedback, or partnerships —
          our team is always ready to
          help.
        </p>
      </div>

      {/* Main Section */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-12
          items-center
        "
      >
        {/* Left Image */}
        <div className="relative">
          <img
            src={assets.contactImg}
            alt="contact"
            className="
              rounded-3xl
              shadow-2xl
              object-cover
              w-full
              h-full
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-black/20
              rounded-3xl
            "
          ></div>
        </div>

        {/* Right Section */}
        <div
          className="
            bg-white
            dark:bg-gray-900
            rounded-3xl
            shadow-2xl
            p-8
            md:p-10
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              text-gray-800
              dark:text-white
              mb-8
            "
          >
            Get In Touch
          </h2>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4 items-start">
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-orange-100
                  text-orange-500
                  flex
                  items-center
                  justify-center
                  text-lg
                "
              >
                <FaMapMarkerAlt />
              </div>

              <div>
                <h3
                  className="
                    font-semibold
                    text-gray-800
                    dark:text-white
                  "
                >
                  Address
                </h3>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-300
                    text-sm
                  "
                >
                  Kerala, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-start">
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-orange-100
                  text-orange-500
                  flex
                  items-center
                  justify-center
                  text-lg
                "
              >
                <FaPhoneAlt />
              </div>

              <div>
                <h3
                  className="
                    font-semibold
                    text-gray-800
                    dark:text-white
                  "
                >
                  Phone
                </h3>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-300
                    text-sm
                  "
                >
                  +91 98765 43210
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-start">
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-orange-100
                  text-orange-500
                  flex
                  items-center
                  justify-center
                  text-lg
                "
              >
                <FaEnvelope />
              </div>

              <div>
                <h3
                  className="
                    font-semibold
                    text-gray-800
                    dark:text-white
                  "
                >
                  Email
                </h3>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-300
                    text-sm
                  "
                >
                  support@foodora.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 items-start">
              <div
                className="
                  w-12
                  h-12
                  rounded-full
                  bg-orange-100
                  text-orange-500
                  flex
                  items-center
                  justify-center
                  text-lg
                "
              >
                <FaClock />
              </div>

              <div>
                <h3
                  className="
                    font-semibold
                    text-gray-800
                    dark:text-white
                  "
                >
                  Working Hours
                </h3>

                <p
                  className="
                    text-gray-600
                    dark:text-gray-300
                    text-sm
                  "
                >
                  Mon - Sun : 9:00 AM -
                  11:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mt-8">
            <h3
              className="
                font-semibold
                text-gray-800
                dark:text-white
                mb-4
              "
            >
              Follow Us
            </h3>

            <div className="flex gap-4">
              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaTwitter />,
                <FaLinkedinIn />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    transition
                    duration-300
                    shadow-md
                  "
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="mt-10 space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-gray-700
                  dark:bg-gray-800
                  dark:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-400
                "
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-gray-700
                  dark:bg-gray-800
                  dark:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-400
                "
              />
            </div>

            <div>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="
                  w-full
                  px-5
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-gray-700
                  dark:bg-gray-800
                  dark:text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-orange-400
                  resize-none
                "
              ></textarea>
            </div>

            <button
              className="
                w-full
                bg-orange-500
                hover:bg-orange-600
                text-white
                font-semibold
                py-3
                rounded-xl
                transition
                duration-300
                shadow-lg
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Reviews */}
      <div className="max-w-7xl mx-auto mt-24">
        <h2
          className="
            text-4xl
            font-bold
            text-center
            text-gray-800
            dark:text-white
            mb-12
          "
        >
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: assets.person1,
              name: "Rahul Sharma",
              review:
                "Amazing food quality and super fast delivery. One of the best food ordering experiences.",
            },

            {
              image: assets.person2,
              name: "Anjali Menon",
              review:
                "Loved the desserts and premium packaging. The app experience is smooth and professional.",
            },

            {
              image: assets.person3,
              name: "Arjun Nair",
              review:
                "Affordable prices with excellent taste. FoodOra has become my favorite food delivery platform.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                dark:bg-gray-900
                rounded-3xl
                shadow-xl
                p-8
                text-center
                hover:-translate-y-2
                transition
                duration-300
              "
            >
              <img
                src={item.image}
                alt={item.name}
                className="
                  w-24
                  h-24
                  rounded-full
                  mx-auto
                  object-cover
                  border-4
                  border-orange-200
                "
              />

              <h3
                className="
                  mt-5
                  text-xl
                  font-bold
                  text-gray-800
                  dark:text-white
                "
              >
                {item.name}
              </h3>

              <p
                className="
                  mt-4
                  text-gray-600
                  dark:text-gray-300
                  text-sm
                  leading-7
                "
              >
                “{item.review}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;