import { Link } from "react-router-dom";
import { paths } from "../../routers/paths";
import { NotFoundPageStyled } from "./NotFoundPageStyled";

export const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Page not found!</h2>
      <span className="not-found__text">
        back to{" "}
        <Link className={"not-found__link"} to={paths.slash}>
          home
        </Link>
      </span>
    </NotFoundPageStyled>
  );
};
