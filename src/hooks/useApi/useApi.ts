import { useCallback } from "react";
import { loadAllTipsActionCreator } from "../../store/features/tips/tipsSlice";
import { TipsFromApi } from "../../store/features/tips/types";
import { useAppDispatch } from "../../store/hooks";

export const useApi = () => {
  const dispatch = useAppDispatch();

  const loadTips = useCallback(async () => {
    const response = await fetch(
      "https://anna-marrodan-final-project-202301-bcn.onrender.com/plantips/tips",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const { tips } = (await response.json()) as TipsFromApi;

    dispatch(loadAllTipsActionCreator(tips));
  }, [dispatch]);

  return { loadTips };
};
