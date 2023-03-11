import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import LoginPage from "../pages/LoginPage/LoginPage";
import endpoints from "./types";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProtectedRoute element={<App />} /> },
      { path: endpoints.login, element: <LoginPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
