import { TipStructure } from "../../store/features/tips/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TipCardStyled } from "./TipCardStyled";
import { useAppSelector } from "../../store/hooks";
interface TipsProps {
  tip: TipStructure;
}

export const TipCard = ({ tip }: TipsProps): JSX.Element => {
  const { id } = useAppSelector((state) => state.user);
  const loggedUser = tip.sharedBy === id;

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
            <button>
              <FontAwesomeIcon
                className="card__icon"
                role="button"
                aria-label="edit"
                icon={solid("pencil")}
              />
            </button>
            <button>
              <FontAwesomeIcon
                className="card__icon"
                role="button"
                aria-label="delete"
                icon={solid("trash")}
              />
            </button>
          </div>
        )}
      </div>
    </TipCardStyled>
  );
};
