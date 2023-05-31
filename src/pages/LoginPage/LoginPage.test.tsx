import { screen } from "@testing-library/react";
import * as ReactRouterDom from "react-router-dom";
import {
  preloadedIsLoggedUser,
  preloadedNotLogedUser,
} from "../../mocks/userPreloadedState";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import LoginPage from "./LoginPage";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Navigate: jest.fn(),
}));

describe("Given a LoginPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the title 'PlanTips'", () => {
      const loginPageTitle = /plantips/i;

      renderRouterWithProviders({ user: preloadedNotLogedUser }, <LoginPage />);
      const heading = screen.getByRole("heading", { name: loginPageTitle });

      expect(heading).toBeInTheDocument();
    });
  });
  test("The it should show an image with the alt text 'Monstera plant'", () => {
    const altText = /monstera plant/i;

    renderRouterWithProviders({ user: preloadedNotLogedUser }, <LoginPage />);
    const image = screen.getByAltText(altText);

    expect(image).toBeInTheDocument();
  });

  describe("When the user is logged in", () => {
    test("Then 'Navigate' should be called", () => {
      renderWithProviders(<LoginPage />, { user: preloadedIsLoggedUser });

      expect(ReactRouterDom.Navigate).toHaveBeenCalled();
    });
  });
});
