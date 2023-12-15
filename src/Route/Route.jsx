import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Project from "../Pages/Project/Project";
import Pricing from "../Pages/Pricing/Pricing";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Contact from "../Pages/Contact/Contact";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/testimonial",
        element: <div>Testimonial</div>,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    ],
  },
]);
