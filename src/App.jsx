import React, { useContext } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout";
import GuestRoute from "./components/GuestRoute";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";
import Privacy from "./pages/Privacy";
import Error from "./pages/Error";

import Cart from "./components/Cart";
import FoodList from "./components/Foodlist";

import AdminLayout from "./components/AdminLayout";
import Add from "./pages/Add";
import List from "./pages/List";

import { AuthProvider, AuthContext } from "./context/AuthContext";

/* Root Redirect Component */
function RequireAuthRedirect() {
  const { currentUser } = useContext(AuthContext);

  // Logged in user
  if (currentUser) {
    return (
      <Navigate
        to={currentUser.role === "admin" ? "/admin" : "/home"}
        replace
      />
    );
  }

  // Guest user
  return <Navigate to="/register" replace />;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuthRedirect />,
    },

    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "menu", element: <FoodList /> },
        { path: "cart", element: <Cart /> },
        { path: "orders", element: <Orders /> },
        { path: "privacy", element: <Privacy /> },
        { path: "error", element: <Error /> },
      ],
    },

    {
      path: "/login",
      element: (
        <GuestRoute>
          <Login />
        </GuestRoute>
      ),
    },

    {
      path: "/register",
      element: (
        <GuestRoute>
          <Register />
        </GuestRoute>
      ),
    },

    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        { path: "add", element: <Add /> },
        { path: "list", element: <List /> },
        { path: "orders", element: <Orders /> },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;