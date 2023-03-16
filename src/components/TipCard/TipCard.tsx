import { TipStructure } from "../../store/features/tips/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TipCardStyled } from "./TipCardStyled";
import { useAppSelector } from "../../store/hooks";
import { Button } from "../Button/Button";
import useApi from "../../hooks/useApi/useApi";
interface TipsProps {
  tip: TipStructure;
}

export const TipCard = ({ tip }: TipsProps): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const { deleteTipById } = useApi();
  const loggedUser = tip.sharedBy === id;

  const deleteIcon = (
    <FontAwesomeIcon className="card__icon" icon={solid("trash")} />
  );
  const editIcon = (
    <FontAwesomeIcon className="card__icon" icon={solid("pencil")} />
  );

  // const deleteTipAction = deleteTipById(id)

  return (
    <TipCardStyled className="card">
      <img
        className="card__image"
        alt={tip.commonName}
        width="120"
        height="120"
        src={tip.image}
      />
      <div className="card__details">
        <div className="card__text">
          <h2 className="card__title">{tip.commonName}</h2>
          <span className="card__scientific-name">{tip.scientificName}</span>
          <span className="card__info">{tip.careLevel}</span>
        </div>
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
