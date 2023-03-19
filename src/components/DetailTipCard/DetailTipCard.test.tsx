import { screen } from "@testing-library/react";
import { maranta } from "../../mocks/tipsMocks";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { DetailTipCard } from "./DetailTipCard";

describe("Given the DetailTipCard component", () => {
  describe("When it is rendered with a maranta", () => {
    test("Then it should show a heading with the title 'Maranta lemon'", () => {
      const expectedTitle = /maranta lemon/i;

      renderWithProviders(<DetailTipCard tip={maranta} />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
