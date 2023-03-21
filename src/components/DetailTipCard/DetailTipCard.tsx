import { TipStructure } from "../../store/features/tips/types";
import { DetailTipCardStyled } from "./DetailTipCardStyled";

interface DetailProps {
  tip: TipStructure;
}

export const DetailTipCard = ({ tip }: DetailProps): JSX.Element => {
  return (
    <DetailTipCardStyled className="detail">
      <div className="detail__title">
        <h1 className="detail__mainTitle">{tip.commonName}</h1>
        <span className="detail__subTitle">{tip.scientificName}</span>
      </div>
      <div className="detail__image-container">
        <img
          className="detail__image"
          width="350"
          height="350"
          src={tip.image}
          alt={tip.commonName}
        ></img>
      </div>
      <span className="detail__care">
        {tip.careLevel.replace(/[^\w\s]/gi, " ")}
      </span>
      <div className="detail__info info">
        <h2 className="info__title">Light</h2>
        <p className="info__text">It requires {tip.light}</p>

        <h2 className="info__title">Water</h2>
        <p className="info__text">It needs to be watered {tip.water}</p>

        <h2 className="info__title">User's tip</h2>
        <p className="info__text">{tip.tip}</p>
      </div>
    </DetailTipCardStyled>
  );
};
