import { toast } from "react-toastify";
import { showErrorModal, showSuccessModal } from "./modals";

beforeAll(() => {
  jest.clearAllMocks();
});

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given the modals functions", () => {
  describe("When showErrorModal is called with an error message 'Something went wrong'", () => {
    test("Then its toast.error function should be called with the error message", () => {
      const errorMessage = "Wrong credentials";
      const errorOptions = {
        position: "top-center",
        closeOnClick: true,
        className: "toast-error",
        closeButton: false,
      };

      showErrorModal(errorMessage);

      expect(toast.error).toHaveBeenCalledWith(errorMessage, errorOptions);
    });
  });

  describe("When showSuccessModal is called with a success message 'You were successfully logged out!'", () => {
    test("Then its toast.success function should be called with the success message", () => {
      const successMessage = "You were successfully logged out!";
      const successOption = {
        position: "top-center",
        closeOnClick: true,
        className: "toast-success",
        closeButton: false,
      };

      showSuccessModal(successMessage);

      expect(toast.success).toHaveBeenCalledWith(successMessage, successOption);
    });
  });
});
