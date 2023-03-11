import { setupStore } from "../store";
import { UiState } from "../store/features/ui/types";

export const mockErrorUiState: UiState = {
  modal: { isError: true, message: "Wrong credentials" },
  isLoading: true,
};

export const mockUiState: UiState = {
  modal: { isError: false, message: "You were successfully logedout!" },
  isLoading: true,
};

export const mockUiStore = setupStore({ ui: mockUiState });
