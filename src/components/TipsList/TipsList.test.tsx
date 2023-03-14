import { screen } from "@testing-library/react";
import { monstera } from "../../mocks/tipsMocks";
import { renderWithProviders } from "../../test.utils/renderWithProviders";
import { TipsList } from "./TipsList";

describe("Given a TipsList component", () => {
  describe("When it is rendered with a list with a monstera", () => {
    test("Then it should show a card with a title with the text 'Monstera'", () => {
      const receivedTipsList = [monstera];
      const expectedCardTitle = /monstera/i;

      renderWithProviders(<TipsList tips={receivedTipsList} />);
      const title = screen.getByRole("heading", { name: expectedCardTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
