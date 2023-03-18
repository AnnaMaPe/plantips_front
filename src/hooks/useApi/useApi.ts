import { useCallback } from "react";
import { endpoints } from "../../routers/endpoints";
import {
  createTipActionCreator,
  deleteTipByIdActionCreator,
  loadAllTipsActionCreator,
} from "../../store/features/tips/tipsSlice";
import { TipsFromApi, TipStructure } from "../../store/features/tips/types";
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
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
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
  }, [dispatch, token]);

  const loadMyTips = useCallback(async () => {
    try {
      dispatch(setLoaderActioncreator());
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
      dispatch(unsetLoaderActionCreator());
    } catch (error) {
      dispatch(unsetLoaderActionCreator());
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

  const deleteTipById = useCallback(
    async (id: string) => {
      try {
        dispatch(setLoaderActioncreator());

        const response = await fetch(
          `${process.env.REACT_APP_URL_API}${endpoints.tips}${endpoints.delete}${endpoints.slash}${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorMessage = "Tip was not deleted. Try again!";

          throw new Error(errorMessage);
        }

        dispatch(deleteTipByIdActionCreator(id));
        dispatch(unsetLoaderActionCreator());
        dispatch(
          openModalActionCreator({
            isError: false,
            isSuccess: true,
            message: "Tip was successfully deleted",
          })
        );
      } catch (error: unknown) {
        dispatch(
          openModalActionCreator({
            isError: true,
            message: (error as Error).message,
            isSuccess: false,
          })
        );
      }
    },
    [dispatch, token]
  );

  const createTip = useCallback(
    async (tip: TipStructure) => {
      try {
        dispatch(setLoaderActioncreator());
        const response = await fetch(
          `${process.env.REACT_APP_URL_API}${endpoints.tips}${endpoints.create}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorMessage = "Tip was not created. Try again!";

          throw new Error(errorMessage);
        }

        dispatch(createTipActionCreator(tip));
        dispatch(unsetLoaderActionCreator());
        dispatch(
          openModalActionCreator({
            isError: false,
            isSuccess: true,
            message: "Tip was successfully created",
          })
        );
      } catch (error: unknown) {
        dispatch(
          openModalActionCreator({
            isError: true,
            message: (error as Error).message,
            isSuccess: false,
          })
        );
      }
    },
    [dispatch, token]
  );

  return { loadAllTips, loadMyTips, deleteTipById, createTip };
};

export default useApi;
