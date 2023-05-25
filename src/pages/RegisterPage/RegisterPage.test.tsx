import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import RegisterPage from "./RegisterPage";

describe("Give a RegisterPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'PlanTips'", () => {
      const expectedText = /plantips/i;

      renderWithProviders(<RegisterPage />);

      const heading = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  test("Then it should show an image with the alt text 'Calathea plan'", () => {
    const expectedAltText = /calathea plant/i;

    renderWithProviders(<RegisterPage />);

    const image = screen.getByAltText(expectedAltText);

    expect(image).toBeInTheDocument();
  });
});
