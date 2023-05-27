import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { RegisterForm } from "./RegisterForm";
import userEvent from "@testing-library/user-event";
import { mockUserRegisterCredentials } from "../../mocks/userMocks";

const mockedSubmit = jest.fn();
jest.mock("../../hooks/useUser/useUser", () => () => ({
  registerUser: mockedSubmit,
}));

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

  describe("When the user submits the form with only the username 'PlantLover'", () => {
    test("The then button should be disabled", async () => {
      const usernameText = /username/i;
      const buttonText = /register/i;

      renderWithProviders(<RegisterForm />);

      const usernamePlaceholder = screen.getByPlaceholderText(usernameText);

      const registerButton = screen.getByRole("button", { name: buttonText });

      await userEvent.type(
        usernamePlaceholder,
        mockUserRegisterCredentials.username
      );

      expect(registerButton).toBeDisabled();
    });
  });

  describe("When the user submits the form with the username 'PlantLover' and its corresponding credentials", () => {
    test("Then the registerUser function should be called", async () => {
      const usernameText = /username/i;
      const emailText = /e-mail/i;
      const passwordText = /password/i;
      const buttonText = /register/i;

      renderWithProviders(<RegisterForm />);

      const usernamePlaceholder = screen.getByPlaceholderText(usernameText);
      const emailPlaceholder = screen.getByPlaceholderText(emailText);
      const passwordPlaceholder = screen.getByPlaceholderText(passwordText);
      const registerButton = screen.getByRole("button", { name: buttonText });

      await userEvent.type(
        usernamePlaceholder,
        mockUserRegisterCredentials.username
      );
      await userEvent.type(emailPlaceholder, mockUserRegisterCredentials.email);
      await userEvent.type(
        passwordPlaceholder,
        mockUserRegisterCredentials.password
      );
      await userEvent.click(registerButton);

      expect(mockedSubmit).toHaveBeenCalledWith(mockUserRegisterCredentials);
    });
  });
});
