import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../test.utils/renderWithProviders";
import { HomePage } from "./HomePage";

describe("Given a HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'User’s tips'", () => {
      const expectedTitle = /User’s tips/i;

      renderRouterWithProviders(<HomePage />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
