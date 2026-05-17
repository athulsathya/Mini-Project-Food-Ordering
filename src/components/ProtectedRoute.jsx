import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children, role }) {
  const { currentUser } = useContext(AuthContext);

  // Show Toast Only Once
  useEffect(() => {
    if (!currentUser) {
      toast.info("Please login to access this page");
    }
  }, [currentUser]);

  // Not Logged In
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Role Based Protection
  if (role && currentUser.role !== role) {
    toast.error("Access Denied");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
