import { setupStore } from "../store";
import { UiState } from "../store/features/ui/types";

export const preloadedErrorUiState: UiState = {
  modal: { isError: true, message: "Wrong credentials", isSuccess: false },
  isLoading: false,
};

export const preloadedUiState: UiState = {
  modal: {
    isError: false,
    message: "You were successfully logged out!",
    isSuccess: true,
  },
  isLoading: true,
};

export const mockUiStore = setupStore({ ui: preloadedUiState });
