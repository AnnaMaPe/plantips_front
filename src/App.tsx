import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="container">
      <ToastContainer />
      <Outlet />
    </div>
  );
};

export default App;
