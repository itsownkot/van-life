import { redirect } from "react-router-dom";

export function requireAuth(request) {
  const loggedIn = localStorage.getItem("loggedIn");
  const pathname = new URL(request.url).pathname;

  if (!loggedIn) {
    redirect(`/login?message=You must log in first.&redirectTo=${pathname}`);
  }
}
