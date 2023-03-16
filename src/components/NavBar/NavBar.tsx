import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { endpoints } from "../../routers/endpoints";
import { NavBarStyled } from "./NavBarStyled";

export const NavBar = (): JSX.Element => {
  return (
    <NavBarStyled className="nav">
      <NavLink to={endpoints.home}>
        <FontAwesomeIcon className="nav__icon" icon={solid("tree")} />
      </NavLink>
      <NavLink to={endpoints.home}>
        <FontAwesomeIcon className="nav__icon" icon={solid("plus")} />
      </NavLink>
      <NavLink to={endpoints.myTips}>
        <FontAwesomeIcon className="nav__icon" icon={solid("clipboard-list")} />
      </NavLink>
      <NavLink to={endpoints.myTips}>
        <FontAwesomeIcon className="nav__icon" icon={solid("user-xmark")} />
      </NavLink>
    </NavBarStyled>
  );
};
