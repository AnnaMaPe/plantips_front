import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import useUser from "../../hooks/useUser/useUser";
import { endpoints } from "../../routers/endpoints";
import { NavBarStyled } from "./NavBarStyled";

export const NavBar = (): JSX.Element => {
  const { logoutUser } = useUser();

  return (
    <NavBarStyled className="nav">
      <NavLink to={endpoints.slash} title="home">
        <FontAwesomeIcon
          name="home"
          className="nav__icon"
          icon={faHouseChimney}
        />
      </NavLink>
      <NavLink to={endpoints.create} title="create tip">
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
      <NavLink
        to={endpoints.login}
        onClick={() => logoutUser()}
        title="log out"
      >
        <FontAwesomeIcon
          name="log out"
          className="nav__icon"
          icon={solid("user-xmark")}
        />
      </NavLink>
    </NavBarStyled>
  );
};
