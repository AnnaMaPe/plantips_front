import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { Filter } from "./Filter";

describe("Given a component Filter", () => {
  describe("When it is rendered", () => {
    test("Then it should show an select input with the aria-label 'Level of care required'", () => {
      const expectedAriaLabel = /level of care required/i;

      renderRouterWithProviders({}, <Filter />);
      const careLevelSelect = screen.getByLabelText(expectedAriaLabel);
      expect(careLevelSelect).toBeInTheDocument();
    });
  });
});
