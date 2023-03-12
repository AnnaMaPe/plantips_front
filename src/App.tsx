import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import { loadAllTipsActionCreator } from "./store/features/tips/tipsSlice";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const { isLoading } = useAppSelector((state) => state.ui);

  useEffect(() => {
    loadAllTipsActionCreator([
      {
        commonName: "Monstera",
        scientificName: "Monstera deliciosa",
        careLevel: "Best for conneiseurs",
        water: "Twice per week",
        light: "Indirect light",
        tip: "Do not overwater it",
        image: "pretty_plant.jpg",
      },
    ]);
  });

  return (
    <div className="container">
      {isLoading && <Loader />}
      <Modal />
      <Outlet />
    </div>
  );
};

export default App;
