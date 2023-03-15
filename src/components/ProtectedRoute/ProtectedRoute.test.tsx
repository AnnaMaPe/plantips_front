import { screen } from "@testing-library/react";
import { useAppSelector } from "../../store/hooks";
import { renderWithProviders } from "../../test.utils/renderWithProviders";
import { ProtectedRoute } from "./ProtectedRoute";

jest.mock("../../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

describe("Given a ProtectedRoute component", () => {
  describe("When it is rendered and there is a valid token", () => {
    test("Then it should show the react element that receives by props", () => {
      const state = { user: { token: "ThisIsAToken" } };
      (useAppSelector as jest.Mock).mockImplementation((selector) =>
        selector(state)
      );
      const reactElement = <div>Home Page</div>;
      const expectedText = "Home Page";

      renderWithProviders(<ProtectedRoute element={reactElement} />);
      const expectedReactElement = screen.getByText(expectedText);

      expect(expectedReactElement).toBeInTheDocument();
    });
  });
});
