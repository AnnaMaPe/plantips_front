import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import useToken from "./hooks/useToken/useToken";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { isLoading } = useAppSelector((state) => state.ui);
  const { saveToken } = useToken();

  saveToken();

  return (
    <div className="container">
      {isLoading && <Loader />}
      <Modal />
      <Outlet />
    </div>
  );
};

export default App;
