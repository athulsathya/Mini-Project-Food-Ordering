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
import Contact from "./pages/ContactUs";
import CustomerOrders from "./pages/CustomerOrders";
import Privacy from "./pages/Privacy";
import Error from "./pages/Error";

import Cart from "./components/Cart";
import FoodList from "./components/Foodlist";

import AdminLayout from "./components/AdminLayout";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";

import { AuthProvider, AuthContext } from "./context/AuthContext";

/* Root Redirect */
function RequireAuthRedirect() {
  const { currentUser } = useContext(AuthContext);

  // Redirect Logged In Users
  if (currentUser) {
    if (currentUser.role === "admin") {
      return <Navigate to="/admin/add" replace />;
    }

    return <Navigate to="/home" replace />;
  }

  // Guest Users
  return <Navigate to="/login" replace />;
}

function AppRoutes() {
  const router = createBrowserRouter([
    /* Root Redirect */
    {
      path: "/",
      element: <RequireAuthRedirect />,
    },

    /* User Routes */
    {
      path: "/",
      element: (
        <ProtectedRoute role="user">
          <Layout />
        </ProtectedRoute>
      ),

      children: [
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "menu", element: <FoodList /> },
        { path: "cart", element: <Cart /> },
        {
          path: "customer-orders",
          element: <CustomerOrders />,
        },
        { path: "privacy", element: <Privacy /> },
      ],
    },

    /* Login */
    {
      path: "/login",
      element: (
        <GuestRoute>
          <Login />
        </GuestRoute>
      ),
    },

    /* Register */
    {
      path: "/register",
      element: (
        <GuestRoute>
          <Register />
        </GuestRoute>
      ),
    },

    /* Admin Routes */
    {
      path: "/admin",
      element: (
        <ProtectedRoute role="admin">
          <AdminLayout />
        </ProtectedRoute>
      ),

      children: [
        {
          path: "add",
          element: <Add />,
        },
        {
          path: "list",
          element: <List />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
      ],
    },

    /* Error Route */
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
