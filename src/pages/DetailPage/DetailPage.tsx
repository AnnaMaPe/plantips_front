import { TipStructure } from "../../store/features/tips/types";

interface DetailProps {
  tip: TipStructure;
}

export const DetailPage = ({ tip }: DetailProps): JSX.Element => {
  return (
    <>
      <h1>{tip.commonName}</h1>
      <span>{tip.scientificName}</span>
      <img src={tip.image} alt={tip.commonName}></img>
      <span>{tip.careLevel}</span>
      <div>
        <h2>Light</h2>
        <p>It requires {tip.light}</p>

        <h2>Water</h2>
        <p>It needs to be watered {tip.water}</p>

        <h2>User's tip</h2>
        <p>{tip.tip}</p>
      </div>
    </>
  );
};
