import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./Screens/Root";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Calendar from "./Screens/Calendar";
import Settings from "./Screens/Settings";
import MessageCenter from "./Screens/MessageCenter";
import Members from "./Screens/Members";
import Finance from "./Screens/Finance";
import Files from "./Screens/Files";
import Space from "./Screens/Spaces";
import Ticket from "./Screens/Ticket";
import ErrorPage from "./Screens/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Calendar",
        element: <Calendar />,
      },
      {
        path: "/Files",
        element: <Files />,
      },
      {
        path: "/Finance",
        element: <Finance />,
      },
      {
        path: "/Members",
        element: <Members />,
      },
      {
        path: "/MessageCenter",
        element: <MessageCenter />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
      {
        path: "/Space",
        element: <Space />,
      },
      {
        path: "/Ticket",
        element: <Ticket />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
