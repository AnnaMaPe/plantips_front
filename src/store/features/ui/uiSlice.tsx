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
  },
});

export const uiReducer = uiSlice.reducer;
export const { openModal: openModalActionCreator } = uiSlice.actions;
