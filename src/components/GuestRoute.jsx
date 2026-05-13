import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function GuestRoute({ children }) {
  const { user } = useContext(AuthContext);
  // Logged in users cannot see guest pages
  if (user) return <Navigate to="/home" replace />;
  return children;
}
