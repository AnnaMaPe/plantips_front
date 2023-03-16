import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";
import { UserCredentials } from "../../hooks/useUser/types";

const mockedSubmit = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockedSubmit,
}));

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'Sign up'", () => {
      const expectedTest = /log in/i;

      renderWithProviders(<LoginForm />);
      const button = screen.getByRole("button", { name: expectedTest });

      expect(button).toBeInTheDocument();
    });

    test("The it should show an input with a placeholder with the text 'username'", () => {
      const expectedTest = /username/i;

      renderWithProviders(<LoginForm />);
      const inputsPlaceholder = screen.getByPlaceholderText(expectedTest);

      expect(inputsPlaceholder).toBeInTheDocument();
    });
  });
  describe("When the user submits the form", () => {
    test("Then the loginUser function should be called", async () => {
      const userCredentials: UserCredentials = {
        username: "anna",
        password: "12345678",
      };

      const buttonText = /log in/i;
      const username = /username/i;
      const password = /password/i;

      renderWithProviders(<LoginForm />);

      const submitButton = screen.getByRole("button", { name: buttonText });
      const usernameField = screen.getByPlaceholderText(username);
      const passwordField = screen.getByPlaceholderText(password);

      await userEvent.type(usernameField, userCredentials.username);
      await userEvent.type(passwordField, userCredentials.password);
      await userEvent.click(submitButton);

      expect(mockedSubmit).toHaveBeenCalledWith(userCredentials);
    });
  });
});
