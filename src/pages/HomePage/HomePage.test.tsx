import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { HomePage } from "./HomePage";

describe("Given the HomePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'User’s tips'", () => {
      const expectedTitle = /user’s tips/i;

      renderRouterWithProviders({}, <HomePage />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
