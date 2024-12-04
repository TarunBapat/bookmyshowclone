// publicRoutes.js
import LoginForm from "../pages/UsersForm/LoginForm";
import Register from "../pages/UsersForm/Register";
import ForgetPassword from "../pages/UsersForm/ForgetPassword";

const userRoutes = [
  { path: "/login", component: LoginForm, exact: true },
  { path: "/register", component: Register, exact: true },
  {
    path: "/forget-password",
    component: ForgetPassword,
    exact: true,
  },
];

export default userRoutes;
