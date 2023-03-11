import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../test.utils/renderWithProviders";
import { Loader } from "./Loader";

describe("Given a Loader component", () => {
  describe("When it is rendered", () => {
    test("Then it should a laoder with the aria-role 'status'", () => {
      const expectedAriaRole = "status";

      renderWithProviders(<Loader />);
      const expectedResult = screen.getByRole(expectedAriaRole);

      expect(expectedResult).toBeInTheDocument();
    });
  });
});
