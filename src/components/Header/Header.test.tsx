import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test.utils/renderWithProviders";
import { Header } from "./Header";

describe("Given a component Header", () => {
  describe("When it is rendered", () => {
    test("Then it should show an image with the alt text 'Plantips logo'", () => {
      const expectAltText = "Plantips logo";

      renderWithProviders(<Header />);
      const image = screen.getByAltText(expectAltText);

      expect(image).toBeInTheDocument();
    });
  });
});
