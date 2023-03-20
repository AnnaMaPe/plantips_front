import { setupStore } from "../store";
import { UiState } from "../store/features/ui/types";

export const preloadedErrorModalState: UiState = {
  modal: { isError: true, message: "Wrong credentials", isSuccess: false },
  isLoading: false,
  filter: "",
};

export const preloadedSuccessModelState: UiState = {
  modal: {
    isError: false,
    message: "You were successfully logged out!",
    isSuccess: true,
  },
  isLoading: true,
  filter: "",
};

export const mockUiStore = setupStore({ ui: preloadedSuccessModelState });
