import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { RegisterForm } from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an input with a placeholder with the text 'E-mail'", () => {
      const expectedText = /e-mail/i;

      renderWithProviders(<RegisterForm />);

      const expectedPlaceHolder = screen.getByPlaceholderText(expectedText);

      expect(expectedPlaceHolder).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'Register'", () => {
      const expectedText = /register/i;

      renderWithProviders(<RegisterForm />);

      const expectedButton = screen.getByRole("button", { name: expectedText });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
