import { ModalPayload, UiState } from "./types";
import { openModalActionCreator, uiReducer } from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When it is called with an openModal action and an error with the text 'Wrong credentials'", () => {
    test("Then it should show a modal with the text 'Wrong credentials'", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: { isError: false, message: "" },
      };
      const modalPayload: ModalPayload = {
        message: "Wrong credentials",
        isError: true,
      };
      const expectedNewState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          message: "Wrong credentials",
        },
      };

      const openModalAction = openModalActionCreator(modalPayload);
      const newUiState = uiReducer(uiInitialState, openModalAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });
});
