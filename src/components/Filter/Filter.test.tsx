import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { maranta } from "../../mocks/tipsMocks";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import { Filter } from "./Filter";

const mockedSubmit = jest.fn();

jest.mock("../../hooks/useApi/useApi", () => () => ({
  loadAllTips: mockedSubmit,
}));

describe("Given a component Filter", () => {
  describe("When it is rendered", () => {
    test("Then it should show an select input with the aria-label 'Level of care required'", () => {
      const expectedAriaLabel = /level of care required/i;

      renderRouterWithProviders({}, <Filter />);
      const careLevelSelect = screen.getByLabelText(expectedAriaLabel);
      expect(careLevelSelect).toBeInTheDocument();
    });
  });
  describe("When the user submits the Filter with the 'Only for experts'", () => {
    test("Then the loadAllTips function should be called", async () => {
      const careLevel = /level of care required/i;
      const expectedFilter = "only-for-experts";

      renderRouterWithProviders({}, <Filter />);

      const careLevelSelect = screen.getByRole("combobox", { name: careLevel });

      await userEvent.selectOptions(careLevelSelect, maranta.careLevel);

      expect(mockedSubmit).toHaveBeenCalledWith(expectedFilter);
    });
  });
});
