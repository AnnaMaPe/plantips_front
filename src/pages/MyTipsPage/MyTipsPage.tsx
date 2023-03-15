import { useEffect } from "react";
import { TipsList } from "../../components/TipsList/TipsList";
import useApi from "../../hooks/useApi/useApi";

export const MyTipsPage = (): JSX.Element => {
  const { loadMyTips } = useApi();

  useEffect(() => {
    loadMyTips();
  }, [loadMyTips]);

  return (
    <>
      <div className="my-tips__text">
        <h1 className="my-tips__title">My tips</h1>
        <span className="my-tips__description">
          Check and modify the tips you have shared with our leafy community
        </span>
      </div>
      <TipsList />
    </>
  );
};
