import { LoaderStyled } from "./LoaderStyled";

export const Loader = (): JSX.Element => {
  return (
    <LoaderStyled className="loader" aria-label="content loading" role="status">
      <svg className="ring" viewBox="25 25 50 50" strokeWidth="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </LoaderStyled>
  );
};
