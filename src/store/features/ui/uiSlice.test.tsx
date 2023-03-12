import { ModalPayload, UiState } from "./types";
import {
  closeModalActionCreator,
  openModalActionCreator,
  setLoaderActioncreator,
  uiReducer,
  unsetLoaderActionCreator,
} from "./uiSlice";

describe("Given a uiReducer reducer", () => {
  describe("When it is called with an openModal action and an error with the text 'Wrong credentials'", () => {
    test("Then it should show a modal with the text 'Wrong credentials'", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: { isError: false, message: "", isSuccess: false },
      };
      const modalPayload: ModalPayload = {
        message: "Wrong credentials",
        isError: true,
        isSuccess: false,
      };
      const expectedNewState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          message: "Wrong credentials",
          isSuccess: false,
        },
      };

      const openModalAction = openModalActionCreator(modalPayload);
      const newUiState = uiReducer(uiInitialState, openModalAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it is called with a setLoader action", () => {
    test("Then it should return a new state with setLoader is true'", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: { isError: false, message: "", isSuccess: false },
      };
      const expectedUiState: UiState = {
        isLoading: true,
        modal: { isError: false, message: "", isSuccess: false },
      };

      const setLoaderAction = setLoaderActioncreator();
      const newUiState = uiReducer(uiInitialState, setLoaderAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
  describe("When it is called with a unsetLoader action", () => {
    test("Then it should render a loader with the aria-role 'status''", () => {
      const uiInitialState: UiState = {
        isLoading: true,
        modal: { isError: false, message: "", isSuccess: false },
      };
      const expectedUiState: UiState = {
        isLoading: false,
        modal: { isError: false, message: "", isSuccess: false },
      };

      const unsetLoaderAction = unsetLoaderActionCreator();
      const newUiState = uiReducer(uiInitialState, unsetLoaderAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
  describe("When it is called with a closeModal action after showing a modal for an error with the text 'Wrong credentials'", () => {
    test("Then it should hide the modal", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          message: "Wrong credentials",
          isSuccess: false,
        },
      };

      const expectedNewState: UiState = {
        isLoading: false,
        modal: { isError: false, message: "", isSuccess: false },
      };

      const closeModalAction = closeModalActionCreator();
      const newUiState = uiReducer(uiInitialState, closeModalAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });
});
