import { screen } from "@testing-library/react";
import { maranta } from "../../mocks/tipsMocks";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { DetailPage } from "./DetailPage";

describe("Given the DetailPage page", () => {
  describe("When it is rendered with a maranta", () => {
    test("Then it should show a heading with the title 'Maranta lemon'", () => {
      const expectedTitle = /maranta lemon/i;

      renderRouterWithProviders({}, <DetailPage tip={maranta} />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
