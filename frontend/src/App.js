import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import LoginPage, { loginFormAction } from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserMainPage from "./pages/UserMainPage";
import ErrorPage from "./pages/ErrorPage";

const route = createBrowserRouter([
  {
    path: "/",
    id: "root",
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <UserMainPage /> },
      {
        path: "home",
        children: [
          { index: true, element: <RootLayout /> },
          { path: "login", element: <LoginPage />, action: loginFormAction },
          { path: "signup", element: <SignupPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
