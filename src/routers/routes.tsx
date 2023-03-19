import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";
import { CreatePage } from "../pages/CreatePage/CreatePage";
import { DetailPage } from "../pages/DetailPage/DetailPage";
import { HomePage } from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { MyTipsPage } from "../pages/MyTipsPage/MyTipsPage";
import { paths } from "./paths";

const routes: RouteObject[] = [
  {
    path: paths.slash,
    element: <App />,
    children: [
      { path: paths.slash, element: <ProtectedRoute element={<HomePage />} /> },
      { path: paths.login, element: <LoginPage /> },
      { path: paths.myTips, element: <MyTipsPage /> },
      { path: paths.create, element: <CreatePage /> },
      { path: "/detail/:id", element: <DetailPage /> },
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
