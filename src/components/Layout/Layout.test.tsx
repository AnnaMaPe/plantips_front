import { screen } from "@testing-library/react";
import { preloadedSuccessModelState } from "../../mocks/uiPreloadedState";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";

import { Layout } from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Loader component when it is loading", () => {
      renderRouterWithProviders({ ui: preloadedSuccessModelState }, <Layout />);
      const loader = screen.getByRole("status");

      expect(loader).toBeInTheDocument();
    });
  });
});
