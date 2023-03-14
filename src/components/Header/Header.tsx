import { HeaderStyled } from "./HeaderStyled";

export const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        className="login__photo"
        src="../images/logoBig.webp"
        alt="Plantips logo"
        width="65"
        height="65"
      />
    </HeaderStyled>
  );
};
