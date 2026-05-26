import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

function ProtectedRoute({ children, role }) {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (!currentUser) {
      toast.info("Please login first");
    }
  }, [currentUser]);

  // Not Logged In
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // Wrong Role
  if (role && currentUser.role !== role) {
    toast.error("Access Denied");
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;