import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { endpoints } from "../../routers/endpoints";
import { NavBarStyled } from "./NavBarStyled";

export const NavBar = (): JSX.Element => {
  return (
    <NavBarStyled className="nav">
      <NavLink to={endpoints.home} title="home">
        <FontAwesomeIcon
          name="home"
          className="nav__icon"
          icon={faHouseChimney}
        />
      </NavLink>
      <NavLink to={"hola"} title="create tip">
        <FontAwesomeIcon
          name="create tip"
          className="nav__icon"
          icon={solid("plus")}
        />
      </NavLink>
      <NavLink to={endpoints.myTips} title="my tips">
        <FontAwesomeIcon
          name="my tips"
          className="nav__icon"
          icon={solid("clipboard-list")}
        />
      </NavLink>
      <NavLink to={"hola"} title="log out">
        <FontAwesomeIcon
          name="log out"
          className="nav__icon"
          icon={solid("user-xmark")}
        />
      </NavLink>
    </NavBarStyled>
  );
};
