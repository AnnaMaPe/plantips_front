import { Outlet } from "react-router-dom";
import { Modal } from "./components/Modal/Modal";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const {
    modal: { message },
  } = useAppSelector((state) => state.ui);

  return (
    <div className="container">
      <Outlet />
      {message && <Modal />}
    </div>
  );
};

export default App;
