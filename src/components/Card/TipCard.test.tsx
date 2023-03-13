import { screen } from "@testing-library/react";
import { monstera } from "../../mocks/tipsMocks";
import { renderWithProviders } from "../../test.utils/renderWithProviders";
import { TipCard } from "./TipCard";

describe("Given a TipCard component", () => {
  describe("When it is rendered with a Monstera", () => {
    test("Then it should show a heading with the title 'Monstera'", () => {
      const expectedTitle = monstera.commonName;

      renderWithProviders(<TipCard tip={monstera} />);
      const card = screen.getByRole("heading", { name: expectedTitle });

      expect(card).toBeInTheDocument();
    });
  });
});
