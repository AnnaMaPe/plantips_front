import { screen } from "@testing-library/react";
import { monstera } from "../../mocks/tipsMocks";
import { userIsLoggedState } from "../../mocks/userPreloadedState";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { TipCard } from "./TipCard";
import userEvent from "@testing-library/user-event";

const mockDeleteTip = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => () => ({
  deleteTipById: mockDeleteTip,
}));

describe("Given a TipCard component", () => {
  describe("When it is rendered with a Monstera that was shared by the logged user", () => {
    test("Then it should show an icon with the aria-label 'delete'", () => {
      const expectedLabel = /delete/i;

      renderRouterWithProviders(
        { user: userIsLoggedState },
        <TipCard tip={monstera} />
      );
      const button = screen.getByRole("button", { name: expectedLabel });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When the user clicks the button", () => {
    test("Then the deleteTipById function should be called", async () => {
      const buttonText = /delete/i;

      renderRouterWithProviders(
        { user: userIsLoggedState },
        <TipCard tip={monstera} />
      );
      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      expect(mockDeleteTip).toHaveBeenCalledWith(monstera.id);
    });
  });
});
