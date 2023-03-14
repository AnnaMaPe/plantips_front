import { TipsList } from "../../components/TipsList/TipsList";
import { HomePageStyled } from "./HomePageStyled";

export const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled className="home">
      <div className="home__text">
        <h1 className="home__title">User’s tips</h1>
        <span className="home__description">
          Check out the best tips from other users to make your plants grow!
        </span>
      </div>
      <TipsList />
    </HomePageStyled>
  );
};
