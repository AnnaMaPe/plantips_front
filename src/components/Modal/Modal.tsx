import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { showErrorModal, showSuccessModal } from "../../modals/modals";
import { closeModalActionCreator } from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, message, isSuccess },
  } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      showErrorModal(message);
    }

    if (isSuccess) {
      showSuccessModal(message);
    }
    dispatch(closeModalActionCreator());
  }, [dispatch, isError, message, isSuccess]);

  return <ToastContainer />;
};

export default Modal;
