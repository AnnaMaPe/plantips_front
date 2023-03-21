import { useEffect } from "react";
import { Filter } from "../../components/Filter/Filter";
import { TipsList } from "../../components/TipsList/TipsList";
import useApi from "../../hooks/useApi/useApi";
import { HomePageStyled } from "./HomePageStyled";

export const HomePage = (): JSX.Element => {
  const { loadAllTips } = useApi();

  useEffect(() => {
    loadAllTips();
  }, [loadAllTips]);

  return (
    <HomePageStyled className="home">
      <div className="home__text">
        <h1 className="home__title">User’s tips</h1>
        <span className="home__description">
          Check out the best tips from other users to make your plants grow!
        </span>
      </div>
      <Filter />
      <TipsList />
    </HomePageStyled>
  );
};
