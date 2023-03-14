import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { Loader } from "../Loader/Loader";
import Modal from "../Modal/Modal";

export const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <>
      {isLoading && <Loader />}
      <Modal />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
