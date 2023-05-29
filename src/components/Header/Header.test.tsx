import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { Header } from "./Header";
import { preloadedIsLoggedUser } from "../../mocks/userPreloadedState";

describe("Given a component Header", () => {
  describe("When it is rendered and the user is logged", () => {
    test("Then it should show an image with the alt text 'Plantips logo'", () => {
      const expectAltText = "Plantips logo";

      renderRouterWithProviders({ user: preloadedIsLoggedUser }, <Header />);
      const image = screen.getByAltText(expectAltText);

      expect(image).toBeInTheDocument();
    });
  });
});
