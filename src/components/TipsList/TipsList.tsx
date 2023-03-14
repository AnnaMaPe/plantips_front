import { useEffect } from "react";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";
import { TipCard } from "../Card/TipCard";
import { TipsListStyled } from "./TipsListStyled";

export const TipsList = (): JSX.Element => {
  const { loadAllTips } = useApi();

  useEffect(() => {
    loadAllTips();
  }, [loadAllTips]);

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
