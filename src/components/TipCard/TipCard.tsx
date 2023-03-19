import { TipStructure } from "../../store/features/tips/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TipCardStyled } from "./TipCardStyled";
import { useAppSelector } from "../../store/hooks";
import { Button } from "../Button/Button";
import useApi from "../../hooks/useApi/useApi";
import { Link } from "react-router-dom";
import { paths } from "../../routers/paths";

interface TipsProps {
  tip: TipStructure;
}

export const TipCard = ({ tip }: TipsProps): JSX.Element => {
  const { id: userId } = useAppSelector((state) => state.user);
  const { deleteTipById } = useApi();
  const loggedUser = tip.sharedBy === userId;

  const deleteIcon = (
    <FontAwesomeIcon className="card__icon" icon={solid("trash")} />
  );
  const editIcon = (
    <FontAwesomeIcon className="card__icon" icon={solid("pencil")} />
  );

  return (
    <TipCardStyled className="card">
      <Link to={`${paths.detail}${paths.slash}${tip.id}`}>
        <img
          className="card__image"
          alt={tip.commonName}
          width="120"
          height="120"
          src={tip.image}
        />
      </Link>
      <div className="card__details">
        <Link to={`${paths.detail}${paths.slash}${tip.id}`}>
          <div className="card__text">
            <h2 className="card__title">{tip.commonName}</h2>
            <span className="card__scientific-name">{tip.scientificName}</span>
            <span className="card__info">{tip.careLevel}</span>
          </div>
        </Link>
        {loggedUser && (
          <div className="card__icons ">
            <Button
              className="card__button"
              ariaLabel={"edit"}
              icon={editIcon}
            />
            <Button
              className="card__button"
              ariaLabel={"delete"}
              icon={deleteIcon}
              action={() => deleteTipById(tip.id)}
            />
          </div>
        )}
      </div>
    </TipCardStyled>
  );
};
