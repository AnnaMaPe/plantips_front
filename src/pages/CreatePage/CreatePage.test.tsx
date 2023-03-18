import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { CreatePage } from "./CreatePage";

describe("Given the HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'User’s tips'", () => {
      const expectedTitle = /share a tip/i;

      renderWithProviders(<CreatePage />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
