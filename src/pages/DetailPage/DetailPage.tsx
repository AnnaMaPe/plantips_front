import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailTipCard } from "../../components/DetailTipCard/DetailTipCard";
import useApi from "../../hooks/useApi/useApi";
import { useAppSelector } from "../../store/hooks";

export const DetailPage = (): JSX.Element => {
  const { loadTipById } = useApi();
  const { detailTip } = useAppSelector((state) => state.tips);
  const { id } = useParams();

  useEffect(() => {
    loadTipById(id!);
  }, [id, loadTipById]);

  return <DetailTipCard tip={detailTip} />;
};
