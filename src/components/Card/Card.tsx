import { TipStructure } from "../../store/features/tips/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
interface TipsProps {
  tip: TipStructure;
}

export const TipCard = ({ tip }: TipsProps): JSX.Element => {
  return (
    <>
      <img alt={tip.commonName}>{tip.image}</img>
      <h2>{tip.commonName}</h2>
      <span>{tip.scientificName}</span>
      <FontAwesomeIcon icon={solid("pencil")} />
      <FontAwesomeIcon icon={solid("trash")} />
    </>
  );
};
