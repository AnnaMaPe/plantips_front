import { TipStructure } from "../../store/features/tips/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { TipCardStyled } from "./TipCardStyled";
interface TipsProps {
  tip: TipStructure;
}

export const TipCard = ({ tip }: TipsProps): JSX.Element => {
  return (
    <TipCardStyled className="card">
      <img
        className="card__image"
        alt={tip.commonName}
        width="120"
        height="120"
        src="https://res.cloudinary.com/dduvthi6s/image/upload/v1678630905/Ficus-Elastica-Robusta_rtr5da.webp"
      />
      <div className="card__details">
        <div className="card__text">
          <h2 className="card__title">{tip.commonName}</h2>
          <span className="card__scientific-name">{tip.scientificName}</span>
          <span className="card__info">{tip.careLevel}</span>
        </div>
        <div className="card__icons ">
          <FontAwesomeIcon
            className="card__icon"
            role="button"
            aria-label="edit"
            icon={solid("pencil")}
          />
          <FontAwesomeIcon
            className="card__icon"
            role="button"
            aria-label="delete"
            icon={solid("trash")}
          />
        </div>
      </div>
    </TipCardStyled>
  );
};
