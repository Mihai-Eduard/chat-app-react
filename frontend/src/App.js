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
    errorElement: <ErrorPage />,
    children: [
      { path: "home", element: <RootLayout />, children: [] },
      { path: "login", element: <LoginPage />, action: loginFormAction },
      { path: "signup", element: <SignupPage /> },
      { path: "user", element: <UserMainPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
