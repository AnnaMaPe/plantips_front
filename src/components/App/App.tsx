import useToken from "../../hooks/useToken/useToken";
import { NavBar } from "../NavBar/NavBar";

const App = () => {
  const { saveToken } = useToken();

  saveToken();
  return <NavBar />;
};

export default App;
