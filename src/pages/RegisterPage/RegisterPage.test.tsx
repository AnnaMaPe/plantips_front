import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import RegisterPage from "./RegisterPage";
import {
  preloadedIsLoggedUser,
  preloadedNotLogedUser,
} from "../../mocks/userPreloadedState";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Give a RegisterPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title with the text 'PlanTips'", () => {
      const expectedText = /plantips/i;

      renderRouterWithProviders(
        { user: preloadedNotLogedUser },
        <RegisterPage />
      );

      const heading = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  test("Then it should show an image with the alt text 'Calathea plan'", () => {
    const expectedAltText = /calathea plant/i;

    renderRouterWithProviders(
      { user: preloadedNotLogedUser },
      <RegisterPage />
    );

    const image = screen.getByAltText(expectedAltText);

    expect(image).toBeInTheDocument();
  });

  describe("When the user is logged in", () => {
    test("Then 'Navigate' should be called", () => {
      renderWithProviders(<RegisterPage />, { user: preloadedIsLoggedUser });

      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
