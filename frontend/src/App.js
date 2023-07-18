import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserMainPage from "./pages/UserMainPage";

const route = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "home", element: <RootLayout />, children: [] },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "user", element: <UserMainPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
