export interface UiState {
  isLoading: boolean;
  modal: { message: string; isError: boolean; isSuccess: boolean };
  filter: sstring;
}

export interface ModalPayload {
  message: string;
  isError: boolean;
  isSuccess: boolean;
}
