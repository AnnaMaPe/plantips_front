import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { CreateForm } from "./CreateForm";

describe("Given a CreateForm component", () => {
  describe("When it is rendered", () => {
    test("The it should show an input with a placeholder with the text 'Plant's common name'", () => {
      const expectedTest = /plant's common name/i;

      renderWithProviders(<CreateForm />);
      const inputsPlaceholder = screen.getByPlaceholderText(expectedTest);

      expect(inputsPlaceholder).toBeInTheDocument();
    });
  });
});
