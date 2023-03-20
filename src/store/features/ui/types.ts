export interface UiState {
  isLoading: boolean;
  modal: { message: string; isError: boolean; isSuccess: boolean };
  filter: string;
}

export interface ModalPayload {
  message: string;
  isError: boolean;
  isSuccess: boolean;
}
