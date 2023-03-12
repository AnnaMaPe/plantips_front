import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ModalPayload, UiState } from "./types";

const uiInitialState: UiState = {
  isLoading: false,
  modal: { isError: false, message: "" },
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
      },
    }),
    closeModal: (currentUiState): UiState => ({
      ...currentUiState,
      modal: {
        message: "",
        isError: false,
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
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
  setLoader: setLoaderActioncreator,
  unSetLoader: unsetLoaderActionCreator,
} = uiSlice.actions;
