import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/home/Home";
import Menu from "../components/menu/Menu";
import FishBurger from "../components/fishBurger/FishBurger";
import About from "../components/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/fish-burger",
        element: <FishBurger />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
