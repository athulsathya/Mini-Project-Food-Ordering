import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
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

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

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

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (existingUser) {
      toast.error("Email already registered");
      return;
    }

    // Create New User
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

      // Auto Login after register
      login({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      });

      toast.success(
        `${role === "admin" ? "Admin" : "User"} Registered Successfully!`
      );

      // Redirect by role
      navigate(role === "admin" ? "/admin" : "/home");
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Register
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={onChange}
          className="w-full border p-2 mb-3 rounded"
        />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirm"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={onChange}
          className="w-full border p-2 mb-4 rounded"
        />

        {/* Role Selection */}
        <div className="flex gap-3 mb-4">
          <button
            type="button"
            onClick={() => setRole("user")}
            className={`w-full py-2 rounded font-semibold ${
              role === "user"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            User
          </button>

          <button
            type="button"
            onClick={() => setRole("admin")}
            className={`w-full py-2 rounded font-semibold ${
              role === "admin"
                ? "bg-orange-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Admin
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;