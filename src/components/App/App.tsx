import useToken from "../../hooks/useToken/useToken";
import { Layout } from "../Layout/Layout";

const App = () => {
  const { saveToken } = useToken();

  saveToken();
  return (
    <div className="container">
      <Layout />
    </div>
  );
};

export default App;
