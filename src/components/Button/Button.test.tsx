import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test.utils/renderWithProviders";
import { Button } from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the text 'Press me'", () => {
      const expectedTest = "Press me";

      renderWithProviders(
        <Button isDisabled={false} text={expectedTest}></Button>
      );
      const button = screen.getByRole("button", { name: expectedTest });

      expect(button).toBeInTheDocument();
    });
  });
});
