import React, { useState, useContext } from "react";

import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

import { AuthContext } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [role, setRole] = useState("user");

  const [loading, setLoading] = useState(false);

  // Handle Input
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Register
  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, confirm } = form;

    // Validation
    if (!name || !email || !password || !confirm) {
      toast.error("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (password !== confirm) {
      toast.error("Passwords do not match");
      return;
    }

    // Get Users
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Existing User Check
    const existingUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase(),
    );

    if (existingUser) {
      toast.error("Email already registered");
      return;
    }

    // Create User
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      role,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      // Auto Login
      login({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      });

      // Save Current User
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      toast.success(
        `${role === "admin" ? "Admin" : "User"} Registered Successfully`,
      );

      // Redirect
      if (role === "admin") {
        navigate("/admin/add");
      } else {
        navigate("/home");
      }
    }, 800);
  };

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gradient-to-br
        from-orange-100
        via-white
        to-orange-50
        px-4
      "
    >
      {/* Card */}
      <div
        className="
          w-full
          max-w-md
          bg-white
          rounded-3xl
          shadow-2xl
          overflow-hidden
        "
      >
        {/* Top */}
        <div
          className="
            bg-orange-500
            text-white
            text-center
            py-8
            px-6
          "
        >
          <h1
            className="
              text-4xl
              font-bold
              tracking-wide
            "
          >
            FoodOra
          </h1>

          <p
            className="
              mt-2
              text-sm
              text-orange-100
            "
          >
            Create Your Account
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-8">
          <h2
            className="
              text-3xl
              font-bold
              text-center
              text-gray-800
              mb-6
            "
          >
            Join Us 🚀
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label
              className="
                text-sm
                font-medium
                text-gray-600
              "
            >
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={form.name}
              onChange={onChange}
              className="
                mt-2
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
                transition
              "
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="
                text-sm
                font-medium
                text-gray-600
              "
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={onChange}
              className="
                mt-2
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
                transition
              "
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className="
                text-sm
                font-medium
                text-gray-600
              "
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={onChange}
              className="
                mt-2
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
                transition
              "
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-5">
            <label
              className="
                text-sm
                font-medium
                text-gray-600
              "
            >
              Confirm Password
            </label>

            <input
              type="password"
              name="confirm"
              placeholder="Confirm password"
              value={form.confirm}
              onChange={onChange}
              className="
                mt-2
                w-full
                border
                border-gray-200
                rounded-xl
                px-4
                py-3
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
                transition
              "
            />
          </div>

          {/* Role */}
          <div className="mb-6">
            <p
              className="
                text-sm
                font-medium
                text-gray-600
                mb-3
              "
            >
              Register As
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setRole("user")}
                className={`
                  w-full
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                  ${
                    role === "user"
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                  }
                `}
              >
                User
              </button>

              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`
                  w-full
                  py-3
                  rounded-xl
                  font-semibold
                  transition
                  ${
                    role === "admin"
                      ? "bg-orange-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-orange-100"
                  }
                `}
              >
                Admin
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-semibold
              py-3
              rounded-xl
              shadow-md
              transition
              duration-300
            "
          >
            {loading ? "Registering..." : "Create Account"}
          </button>

          {/* Login Redirect */}
          <p
            className="
              text-center
              text-sm
              text-gray-500
              mt-6
            "
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="
                text-orange-500
                font-semibold
                hover:underline
              "
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
