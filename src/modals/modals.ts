import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const showErrorModal = (message: string) => {
  toast.error(message, {
    position: "top-center",
    closeOnClick: true,
    className: "toast-error",
  });
};
