import { screen } from "@testing-library/react";
import { preloadedUiState } from "../../mocks/uiPreloadedState";
import { renderRouterWithProviders } from "../../test.utils/renderRouterWithProviders";

import { Layout } from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Loader component when it is loading", () => {
      renderRouterWithProviders({ ui: preloadedUiState }, <Layout />);
      const loader = screen.getByRole("status");

      expect(loader).toBeInTheDocument();
    });
  });
});
