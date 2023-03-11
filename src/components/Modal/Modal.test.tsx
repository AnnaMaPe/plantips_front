import {
  preloadedErrorUiState,
  preloadedUiState,
} from "../../mocks/uiPreloadedState";
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

      renderWithProviders(<Modal />, { ui: preloadedErrorUiState });

      expect(showErrorModal).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe("When it is rendered with a non-error and the message 'You were successfully logedout!'", () => {
    test("Then it should render the ToastContainer Component for error", () => {
      const expectedMessage = "You were successfully logedout!";

      renderWithProviders(<Modal />, { ui: preloadedUiState });

      expect(showSuccessModal).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
