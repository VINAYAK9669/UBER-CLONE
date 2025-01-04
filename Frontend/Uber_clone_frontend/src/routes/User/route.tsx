import { RouteObject } from "react-router-dom";
import UserLogin from "../../pages/user/UserLogin";
import UserRegistration from "../../pages/user/UserRegistration";
import UserProfile from "../../pages/user/UserProfile";
import PrivateRoute from "./PrivateRoutes";

const routes: RouteObject[] = [
  { path: "/user/login", element: <UserLogin /> },
  { path: "/user/registration", element: <UserRegistration /> },
  {
    path: "/user/profile",
    element: <PrivateRoute element={<UserProfile />} />,
  },
];

export default routes;
