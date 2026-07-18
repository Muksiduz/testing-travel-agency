import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

export default function ProtectedRoute({ children }) {
  const { loading, isAuthenticated } = useAuthStore();

  if (loading) return <h1>Loading...</h1>;

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
