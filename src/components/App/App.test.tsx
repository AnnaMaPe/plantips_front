import { screen } from "@testing-library/react";
import { preloadedSuccessModelState } from "../../mocks/uiPreloadedState";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import App from "./App";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Loader component when it is loading", () => {
      renderRouterWithProviders({ ui: preloadedSuccessModelState }, <App />);
      const loader = screen.getByRole("status");

      expect(loader).toBeInTheDocument();
    });
  });

  describe("When it is not rendered", () => {
    test("Then it should show a Loader component when it is loading", () => {
      renderRouterWithProviders({ ui: preloadedSuccessModelState });
      const loader = screen.getByRole("status");

      expect(loader).toBeInTheDocument();
    });
  });
});
