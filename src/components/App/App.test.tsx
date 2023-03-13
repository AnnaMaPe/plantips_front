import { screen } from "@testing-library/react";
import { preloadedUiState } from "../../mocks/uiPreloadedState";
import { renderRouterWithProviders } from "../../test.utils/renderWithProviders";
import App from "./App";

describe("Given a App component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Loader component when it is loading", () => {
      renderRouterWithProviders(<App />, { ui: preloadedUiState });
      const loader = screen.getByRole("status");

      expect(loader).toBeInTheDocument();
    });
  });
});
