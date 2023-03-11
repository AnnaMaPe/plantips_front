import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test.utils/renderWithProviders";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'PlanTips'", () => {
      const loginPageTitle = /plantips/i;

      renderWithProviders(<LoginPage />);
      const heading = screen.getByRole("heading", { name: loginPageTitle });

      expect(heading).toBeInTheDocument();
    });
  });
  test("The it should show an image with the alt text 'Monstera plant'", () => {
    const altText = /monstera plant/i;

    renderWithProviders(<LoginPage />);
    const image = screen.getByAltText(altText);

    expect(image).toBeInTheDocument();
  });
});
