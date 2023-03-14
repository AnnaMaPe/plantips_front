import { HomePageStyled } from "./HomePageStyled";

export const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled className="home">
      <h1 className="home__title">User’s tips</h1>
      <span>
        Check out the best tips from other users to make your plants grow!
      </span>
    </HomePageStyled>
  );
};
