import { TipsStructure } from "../../store/features/tips/types";
import { TipCard } from "../Card/TipCard";
import { TipsListStyled } from "./TipsListStyled";

interface TipsListProps {
  tips: TipsStructure;
}

export const TipsList = ({ tips }: TipsListProps): JSX.Element => {
  return (
    <TipsListStyled className="list">
      {tips.map((tip) => (
        <li className="list__item" key={tip.id}>
          <TipCard tip={tip} />
          <div className="list__separator" />
        </li>
      ))}
    </TipsListStyled>
  );
};
