import { useCallback } from "react";
import { endpoints } from "../../routers/endpoints";
import { loadAllTipsActionCreator } from "../../store/features/tips/tipsSlice";
import { TipsFromApi } from "../../store/features/tips/types";
import {
  openModalActionCreator,
  setLoaderActioncreator,
  unsetLoaderActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);

  const loadAllTips = useCallback(async () => {
    try {
      dispatch(setLoaderActioncreator());

      const response = await fetch(
        `${process.env.REACT_APP_URL_API}${endpoints.tips}`,
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

  const loadMyTips = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_API}${endpoints.tips}${endpoints.myTips}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (!response.ok) {
        const errorMessage = "Not possible to load your Tips";

        const errorMessageError = new Error(errorMessage);

        throw errorMessageError;
      }

      const { tips } = (await response.json()) as TipsFromApi;

      dispatch(loadAllTipsActionCreator(tips));
    } catch (error) {
      const errorMessage = (error as Error).message;
      dispatch(
        openModalActionCreator({
          isError: true,
          message: errorMessage,
          isSuccess: false,
        })
      );
    }
  }, [dispatch, token]);

  return { loadAllTips, loadMyTips };
};

export default useApi;
