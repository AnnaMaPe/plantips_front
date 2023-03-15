import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../test.utils/renderWithProviders";
import { MyTipsPage } from "./MyTipsPage";

describe("Given the MyTipsPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should shows the title 'My tips'", () => {
      const expectedTitle = /my tips/i;

      renderRouterWithProviders(<MyTipsPage />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
