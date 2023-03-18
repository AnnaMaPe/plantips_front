import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { maranta, marantaToBeCreated } from "../../mocks/tipsMocks";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { CreateForm } from "./CreateForm";

const mockedSubmit = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => () => ({
  createTip: mockedSubmit,
}));

describe("Given a CreateForm component", () => {
  describe("When it is rendered", () => {
    test("The it should show an input with a placeholder with the text 'Plant's common name'", () => {
      const expectedTest = /plant's common name/i;

      renderRouterWithProviders({}, <CreateForm />);
      const inputsPlaceholder = screen.getByPlaceholderText(expectedTest);

      expect(inputsPlaceholder).toBeInTheDocument();
    });
  });
  describe("When the user submits the form with the info from a maranta", () => {
    test("Then the createTip function should be called", async () => {
      const commonName = /plant's common name/i;
      const scientificName = /plant's scientifc name/i;
      const image = /image/i;
      const careLevel = /level of care required/i;
      const light = /light/i;
      const water = /water/i;
      const tip = /tip/i;
      const buttonText = /create your Tip/i;

      renderRouterWithProviders({}, <CreateForm />);

      const commonNameInput = screen.getByPlaceholderText(commonName);
      const scientificNameInput = screen.getByPlaceholderText(scientificName);
      const imageInput = screen.getByPlaceholderText(image);
      const careLevelInput = screen.getByRole("combobox", { name: careLevel });
      const lightInput = screen.getByRole("combobox", { name: light });
      const waterInput = screen.getByRole("combobox", { name: water });
      const tipInput = screen.getByPlaceholderText(tip);
      const submitButton = screen.getByRole("button", { name: buttonText });

      await userEvent.type(commonNameInput, maranta.commonName);
      await userEvent.type(scientificNameInput, maranta.scientificName);
      await userEvent.type(imageInput, maranta.image);
      await userEvent.selectOptions(careLevelInput, maranta.careLevel);
      await userEvent.selectOptions(lightInput, maranta.light);
      await userEvent.selectOptions(waterInput, maranta.water);
      await userEvent.type(tipInput, maranta.tip);
      await userEvent.click(submitButton);

      expect(mockedSubmit).toHaveBeenCalledWith(marantaToBeCreated);
    });
  });
});
