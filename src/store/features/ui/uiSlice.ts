import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ModalPayload, UiState } from "./types";

export const uiInitialState: UiState = {
  isLoading: false,
  modal: { isError: false, message: "", isSuccess: false },
  filter: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    openModal: (
      currentUiState,
      action: PayloadAction<ModalPayload>
    ): UiState => ({
      ...currentUiState,
      modal: {
        isError: action.payload.isError,
        message: action.payload.message,
        isSuccess: action.payload.isSuccess,
      },
    }),
    closeModal: (currentUiState): UiState => ({
      ...currentUiState,
      modal: {
        message: uiInitialState.modal.message,
        isError: false,
        isSuccess: false,
      },
    }),
    setLoader: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: true,
    }),
    unSetLoader: (currentUiState): UiState => ({
      ...currentUiState,
      isLoading: false,
    }),
    addFilter: (currentUiState, action: PayloadAction<string>): UiState => ({
      ...currentUiState,
      filter: action.payload,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  setLoader: setLoaderActioncreator,
  unSetLoader: unsetLoaderActionCreator,
  addFilter: addFilterActionCreator,
} = uiSlice.actions;
