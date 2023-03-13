import { useCallback } from "react";
import { endpoints } from "../../routers/endpoints";
import { loadAllTipsActionCreator } from "../../store/features/tips/tipsSlice";
import { TipsFromApi } from "../../store/features/tips/types";
import {
  openModalActionCreator,
  setLoaderActioncreator,
  unsetLoaderActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch } from "../../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();

  const loadAllTips = useCallback(async () => {
    try {
      dispatch(setLoaderActioncreator());

      const response = await fetch(
        `${process.env.REACT_APP_URL_API}${endpoints.plantips}${endpoints.tips}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const errorMessage = "Not possible to load Tips";

        const errorMessageError = new Error(errorMessage);

        throw errorMessageError;
      }
      const { tips } = (await response.json()) as TipsFromApi;

      dispatch(loadAllTipsActionCreator(tips));
      dispatch(unsetLoaderActionCreator());
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;
      dispatch(unsetLoaderActionCreator());
      dispatch(
        openModalActionCreator({
          isError: true,
          message: errorMessage,
          isSuccess: false,
        })
      );
    }
  }, [dispatch]);

  return { loadAllTips };
};

export default useApi;
