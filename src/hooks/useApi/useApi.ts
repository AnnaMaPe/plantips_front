import { useCallback } from "react";
import { endpoints } from "../../routers/endpoints";
import { loadAllTipsActionCreator } from "../../store/features/tips/tipsSlice";
import { TipsFromApi } from "../../store/features/tips/types";
import { useAppDispatch } from "../../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();

  const loadAllTips = useCallback(async () => {
    const response = await fetch(
      `${process.env.REACT_APP_URL_API}${endpoints.plantips}${endpoints.tips}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const { tips } = (await response.json()) as TipsFromApi;

    dispatch(loadAllTipsActionCreator(tips));
  }, [dispatch]);

  return { loadAllTips };
};

export default useApi;
