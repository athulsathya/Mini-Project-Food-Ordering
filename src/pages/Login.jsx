import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";

function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [role, setRole] = useState("user");

  // Input Change
  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Login
  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;

    // Validation
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // Get Users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find User
    const user = users.find((u) => u.email === email);

    // Invalid Credentials
    if (!user || user.password !== password) {
      toast.error("Invalid email or password");
      return;
    }

    // Role Check
    if (user.role !== role) {
      toast.error(`You are not registered as ${role}`);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const loggedInUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      };

      // Save User
      localStorage.setItem("currentUser", JSON.stringify(loggedInUser));

      // Save Context
      login(loggedInUser);

      toast.success("Login Successful");

      // Redirect
      if (user.role === "admin") {
        navigate("/admin/add");
      } else {
        navigate("/home");
      }

      setLoading(false);
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
          shadow-2xl
          rounded-3xl
          overflow-hidden
        "
      >
        {/* Top Section */}
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
            Fresh Food Delivered Fast
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-8">
          <h2
            className="
              text-3xl
              font-bold
              text-gray-800
              text-center
              mb-6
            "
          >
            Welcome Back 👋
          </h2>

          {/* Email */}
          <div className="mb-5">
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
              value={form.email}
              onChange={onChange}
              placeholder="Enter your email"
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
          <div className="mb-5">
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
              value={form.password}
              onChange={onChange}
              placeholder="Enter your password"
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

          {/* Role Selection */}
          <div className="mb-6">
            <p
              className="
                text-sm
                font-medium
                text-gray-600
                mb-3
              "
            >
              Login As
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

          {/* Login Button */}
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
            {loading ? "Logging in..." : "Login"}
          </button>

          {/* Register */}
          <p
            className="
              text-center
              text-sm
              text-gray-500
              mt-6
            "
          >
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="
                text-orange-500
                font-semibold
                hover:underline
              "
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
