import { screen } from "@testing-library/react";
import { TipsList } from "./TipsList";
import { tipsFromApi } from "../../mocks/tipsMocks";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";

describe("Given a TipsList component", () => {
  describe("When it is rendered with a list with a monstera", () => {
    test("Then it should show a card with a title with the text 'Monstera'", () => {
      const expectedCardTitle = /monstera/i;

      renderRouterWithProviders({ tips: tipsFromApi }, <TipsList />);
      const title = screen.getByRole("heading", { name: expectedCardTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
