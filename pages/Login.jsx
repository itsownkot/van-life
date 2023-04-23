import React from "react";
import {
  useLoaderData,
  useNavigation,
  useActionData,
  Form,
  redirect,
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedIn", true);
    const redirectTo =
      new URL(request.url).searchParams.get("redirectTo") || "/host";
    return redirect(redirectTo);
  } catch (err) {
    return err.message;
  }
}

function Login() {
  const errorMessage = useActionData();
  const message = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className="login-container">
      {message && <h1 className="login-error">{message}</h1>}
      <h1>Sign in to your account</h1>
      {errorMessage && <h3 className="data-error">{errorMessage}</h3>}
      <Form action="/login" method="post" className="login-from" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submittin" ? "Logging in..." : "Log in"}
        </button>
      </Form>
    </div>
  );
}

export default Login;
