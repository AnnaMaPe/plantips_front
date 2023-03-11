import { mockErrorUiState, mockUiState } from "../../mocks/uiMocks";
import { showErrorModal, showSuccessModal } from "../../modals/modals";
import { renderWithProviders } from "../../test.utils/renderWithProviders";
import Modal from "./Modal";

jest.mock("../../modals/modals", () => ({
  showErrorModal: jest.fn(),
  showSuccessModal: jest.fn(),
}));

describe("Given a Modal component", () => {
  describe("When it is rendered with an error and the message 'Wrong credentials'", () => {
    test("Then it should render the ToastContainer Component for error", () => {
      const expectedMessage = "Wrong credentials";

      renderWithProviders(<Modal />, { ui: mockErrorUiState });

      expect(showErrorModal).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe("When it is rendered with a non-error and the message 'You were successfully logedout!'", () => {
    test("Then it should render the ToastContainer Component for error", () => {
      const expectedMessage = "You were successfully logedout!";

      renderWithProviders(<Modal />, { ui: mockUiState });

      expect(showSuccessModal).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
