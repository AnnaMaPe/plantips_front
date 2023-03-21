import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { Filter } from "./Filter";

describe("Given a component Filter", () => {
  describe("When it is rendered", () => {
    test("Then it should show an select input with the aria-label 'Level of care required'", () => {
      const expectedAriaLabel = /level of care required/i;

      renderWithProviders(<Filter />);
      const careLevelSelect = screen.getByLabelText(expectedAriaLabel);
      expect(careLevelSelect).toBeInTheDocument();
    });
  });
});
