import { Navigate } from "react-router-dom";

const RoleRoute = ({ allowedRoles, children }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (!allowedRoles.includes(auth.role)) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RoleRoute;
