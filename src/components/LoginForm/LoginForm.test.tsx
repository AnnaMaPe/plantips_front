import { screen } from "@testing-library/react";
import { renderWithProvider } from "../../test.utils/renderWithProviders";
import { LoginForm } from "./LoginForm";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const expectedTest = /log in/i;

      renderWithProvider(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );
      const button = screen.getByRole("button", { name: expectedTest });

      expect(button).toBeInTheDocument();
    });

    test("The it should show an input with a placeholder with the text 'username'", () => {
      const expectedTest = /username/i;

      renderWithProvider(
        <ThemeProvider theme={theme}>
          <LoginForm />
        </ThemeProvider>
      );
      const inputsPlaceholder = screen.getByPlaceholderText(expectedTest);

      expect(inputsPlaceholder).toBeInTheDocument();
    });
  });
});
