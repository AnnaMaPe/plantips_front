import { useAppSelector } from "../../store/hooks";
import { NavBar } from "../NavBar/NavBar";
import { HeaderStyled } from "./HeaderStyled";

export const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  return (
    <HeaderStyled>
      {isLogged && (
        <>
          <img
            className="login__photo"
            src="../images/logoBig.webp"
            alt="Plantips logo"
            width="65"
            height="65"
          />
          <NavBar />
        </>
      )}
    </HeaderStyled>
  );
};
