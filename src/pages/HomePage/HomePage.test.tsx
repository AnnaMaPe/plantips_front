import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { HomePage } from "./HomePage";

describe("Given the HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'User’s tips'", () => {
      const expectedTitle = /User’s tips/i;

      renderWithProviders(<HomePage />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
