import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { CreatePage } from "./CreatePage";

describe("Given the CreatePage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'User’s tips'", () => {
      const expectedTitle = /share a tip/i;

      renderRouterWithProviders({}, <CreatePage />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
