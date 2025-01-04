import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  element: JSX.Element;
}

const isAuthenticated = (): boolean => {
  // Replace with your actual authentication logic
  return !!localStorage.getItem("authToken");
};

const PrivateRoute = ({ element }: PrivateRouteProps): JSX.Element => {
  return isAuthenticated() ? element : <Navigate to="/user/login" />;
};

export default PrivateRoute;
