import { ToastContainer } from "react-toastify";
import { showErrorModal, showSuccessModal } from "../../modals/modals";
import { useAppSelector } from "../../store/hooks";

const Modal = (): JSX.Element => {
  const {
    modal: { isError, message },
  } = useAppSelector((state) => state.ui);

  if (isError) {
    showErrorModal(message);
  }

  if (!isError) {
    showSuccessModal(message);
  }

  return <ToastContainer />;
};

export default Modal;
