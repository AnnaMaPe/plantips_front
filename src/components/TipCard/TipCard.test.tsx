import { screen } from "@testing-library/react";
import { monstera } from "../../mocks/tipsMocks";
import { userIsLoggedState } from "../../mocks/userPreloadedState";
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

  describe("When it is rendered with a Monstera that was shared by the logged user", () => {
    test("Then it should show a a button with the aria-label 'edit'", () => {
      const expectedAriaLabel = "delete";

      renderWithProviders(<TipCard tip={monstera} />, {
        user: userIsLoggedState,
      });
      const button = screen.getByLabelText(expectedAriaLabel);

      expect(button).toBeInTheDocument();
    });
  });
});
