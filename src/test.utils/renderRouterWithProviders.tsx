import { PreloadedState } from "@reduxjs/toolkit";
import { RouterProvider } from "react-router-dom";
import { getComponentRouter, router } from "../routers/routes";
import { RootState } from "../store";
import { renderWithProviders } from "./renderWithProviders";

export const renderRouterWithProviders = (
  preloadedState?: PreloadedState<RootState>,
  ui?: React.ReactElement
) => {
  const routerWithProvider = ui ? getComponentRouter(ui) : router;

  return renderWithProviders(
    <RouterProvider router={routerWithProvider}></RouterProvider>,
    preloadedState
  );
};
