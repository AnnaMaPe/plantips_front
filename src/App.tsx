import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const {
    isLoading,
    modal: { message },
  } = useAppSelector((state) => state.ui);

  return (
    <div className="container">
      {isLoading && <Loader />}
      {message && <Modal />}
      <Outlet />
    </div>
  );
};

export default App;
