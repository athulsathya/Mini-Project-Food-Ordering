import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children }) {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    toast.info("Please login to access this page");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;