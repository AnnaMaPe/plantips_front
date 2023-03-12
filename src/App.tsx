import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <div className="container">
      {isLoading && <Loader />}
      <Modal />
      <Outlet />
    </div>
  );
};

export default App;
