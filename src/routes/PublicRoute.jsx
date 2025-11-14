import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = () => {
  const { user } = useAuth();
  const { Professor } = useAuth();
  return user ? <Navigate to="/dashboard" /> : <Outlet />;
  return Professor ? <Navigate to="/daily-attendance" /> : <Outlet />;
};

export default PublicRoute;
