import { useAppSelector } from "../../store/hooks";
import { TipCard } from "../TipCard/TipCard";
import { TipsListStyled } from "./TipsListStyled";

export const TipsList = (): JSX.Element => {
  const tips = useAppSelector((state) => state.tips.tips);

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
