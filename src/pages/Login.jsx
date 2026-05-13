import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
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

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const { email, password } = form;

    // Empty Fields Check
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    // Get Users from LocalStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    // Find User
    const user = users.find((u) => u.email === email);

    // Invalid Login
    if (!user || user.password !== password) {
      toast.error("Invalid email or password");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Save Login User in Context
      login({
        id: user.id,
        name: user.name,
        email: user.email,
        role: role,
      });

      toast.success("Login successful!");

      // Redirect Based on Role
      navigate(role === "admin" ? "/admin" : "/home");

      setLoading(false);
    }, 700);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/food-bg.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Form */}
      <form
        onSubmit={onSubmit}
        className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow"
      >
        <h2 className="text-2xl font-bold mb-4 text-[#5a4634]">
          Login
        </h2>

        {/* Email */}
        <label className="block mb-2">
          <span className="text-sm text-gray-600">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
          />
        </label>

        {/* Password */}
        <label className="block mb-4">
          <span className="text-sm text-gray-600">Password</span>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            className="mt-1 w-full border rounded px-3 py-2 focus:outline-none"
          />
        </label>

        {/* Role Buttons */}
        <div className="flex justify-between mb-4 gap-3">
          <button
            type="button"
            onClick={() => setRole("user")}
            className={`w-full px-4 py-2 rounded font-semibold ${
              role === "user"
                ? "bg-[#8b5e34] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            User
          </button>

          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`w-full px-4 py-2 rounded font-semibold ${
              role === "admin"
                ? "bg-[#8b5e34] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#d9c7b1] hover:bg-[#cbb29c] text-white py-2 rounded font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;