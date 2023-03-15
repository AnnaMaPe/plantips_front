import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import { HomePage } from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { MyTipsPage } from "../pages/MyTipsPage/MyTipsPage";
import { endpoints } from "./endpoints";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <ProtectedRoute element={<HomePage />} /> },
      { path: endpoints.login, element: <LoginPage /> },
      { path: endpoints.myTips, element: <MyTipsPage /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (Ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: Ui,
    },
  ]);
