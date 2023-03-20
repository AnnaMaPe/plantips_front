import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { paths } from "../../routers/paths";

import { NavBarStyled } from "./NavBarStyled";

export const NavBar = (): JSX.Element => {
  const { logoutUser } = useUser();

  return (
    <NavBarStyled className="nav">
      <NavLink to={paths.slash} title="home">
        <FontAwesomeIcon
          aria-label="home"
          className="nav__icon"
          icon={faHouseChimney}
        />
      </NavLink>
      <NavLink to={paths.create} title="create tip">
        <FontAwesomeIcon
          aria-label="create tip"
          className="nav__icon"
          icon={solid("plus")}
        />
      </NavLink>
      <NavLink to={paths.myTips} title="my tips">
        <FontAwesomeIcon
          aria-label="my tips"
          className="nav__icon"
          icon={solid("clipboard-list")}
        />
      </NavLink>
      <NavLink to={paths.login} onClick={() => logoutUser()} title="log out">
        <FontAwesomeIcon
          aria-label="log out"
          className="nav__icon"
          icon={solid("user-xmark")}
        />
      </NavLink>
    </NavBarStyled>
  );
};
