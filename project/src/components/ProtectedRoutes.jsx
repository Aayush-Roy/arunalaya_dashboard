import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (!auth?.isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
