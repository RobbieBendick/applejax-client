// Import pages.
import Home from "../components/Home/index";
import Register from "../components/Register/index";

export default [
  {
    path: "/",
    to: "/",
    name: "Home",

    exact: true,
    hasMenu: false,
    restrictedRoute: false,
    enabled: true,
    component: Home,
    permission: true,
  },
  {
    path: "/login",
    to: "/login",
    name: "Register",

    exact: true,
    hasMenu: false,
    restrictedRoute: false,
    enabled: true,
    component: Register,
    permission: true,
  },
];
