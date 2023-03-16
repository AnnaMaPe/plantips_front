import { screen } from "@testing-library/react";
import { monstera } from "../../mocks/tipsMocks";
import { userIsLoggedState } from "../../mocks/userPreloadedState";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { TipCard } from "./TipCard";
import "react-router-dom";

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
    test("Then it should show an icon with the aria-label 'edit'", () => {
      const expectedLabel = "delete";

      renderRouterWithProviders(
        { user: userIsLoggedState },
        <TipCard tip={monstera} />
      );
      const button = screen.getByRole("button", { name: expectedLabel });

      expect(button).toBeInTheDocument();
    });
  });
});
