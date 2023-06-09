import {
  preloadedErrorModalState,
  preloadedSuccessModelState,
} from "../../mocks/uiPreloadedState";
import { showErrorModal, showSuccessModal } from "../../modals/modals";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import Modal from "./Modal";

jest.mock("../../modals/modals", () => ({
  showErrorModal: jest.fn(),
  showSuccessModal: jest.fn(),
}));

describe("Given a Modal component", () => {
  describe("When it is rendered with an error and the message 'Wrong credentials'", () => {
    test("Then it should render the ToastContainer Component for error", () => {
      const expectedMessage = "Wrong credentials";

      renderRouterWithProviders({ ui: preloadedErrorModalState }, <Modal />);

      expect(showErrorModal).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe("When it is rendered with a non-error and the message 'You were successfully logged out!'", () => {
    test("Then it should render the ToastContainer Component for succes", () => {
      const expectedMessage = "You were successfully logged out!";

      renderRouterWithProviders({ ui: preloadedSuccessModelState }, <Modal />);

      expect(showSuccessModal).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
