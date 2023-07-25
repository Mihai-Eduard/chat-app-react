import React from "react";
import LoginForm from "../components/LoginForm";
import { json, redirect } from "react-router-dom";
import { saveToken } from "../utils/token";

const LoginPage = () => {
  return (
    <main>
      <LoginForm />
    </main>
  );
};

export default LoginPage;

export async function loginFormAction({ request }) {
  try {
    const user = await request.formData();
    const response = await fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.get("email"),
        password: user.get("password"),
      }),
    });

    const data = await response.json();

    if (response.status === 422) return data;

    saveToken(data.token);
    return redirect("/");
  } catch (error) {
    console.log(error);
    throw json(
      { message: "Could not authenticate the user!" },
      { status: 500 },
    );
  }
}
