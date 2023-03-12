import { Outlet } from "react-router-dom";
import Modal from "./components/Modal/Modal";

const App = () => {
  return (
    <div className="container">
      <Modal />
      <Outlet />
    </div>
  );
};

export default App;
