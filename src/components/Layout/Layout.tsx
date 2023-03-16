import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { Header } from "../Header/Header";
import { Loader } from "../Loader/Loader";
import Modal from "../Modal/Modal";

export const Layout = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <Modal />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
