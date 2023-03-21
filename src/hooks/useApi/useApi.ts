import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../routers/paths";
import {
  deleteTipByIdActionCreator,
  loadAllTipsActionCreator,
  loadTipByIdActionCreator,
} from "../../store/features/tips/tipsSlice";
import {
  TipsFromApi,
  TipStructureToBeCreated,
} from "../../store/features/tips/types";
import {
  openModalActionCreator,
  setLoaderActioncreator,
  unsetLoaderActionCreator,
} from "../../store/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.user);
  const navigateTo = useNavigate();

  const loadAllTips = useCallback(
    async (filter?: string) => {
      try {
        dispatch(setLoaderActioncreator());
        let url;

        if (filter) {
          url =
            `${process.env.REACT_APP_URL_API}${paths.tips}?` +
            new URLSearchParams({ careLevel: filter });
        } else {
          url = `${process.env.REACT_APP_URL_API}${paths.tips}`;
        }

        const response = await fetch(
          url,

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

          throw new Error(errorMessage);
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
    },
    [dispatch, token]
  );

  const loadMyTips = useCallback(async () => {
    try {
      dispatch(setLoaderActioncreator());
      const response = await fetch(
        `${process.env.REACT_APP_URL_API}${paths.tips}${paths.myTips}`,
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
          `${process.env.REACT_APP_URL_API}${paths.tips}${paths.delete}${paths.slash}${id}`,
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
    async (tip: TipStructureToBeCreated) => {
      try {
        dispatch(setLoaderActioncreator());

        const response = await fetch(
          `${process.env.REACT_APP_URL_API}${paths.tips}${paths.create}`,
          {
            method: "POST",
            body: JSON.stringify(tip),
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

        dispatch(unsetLoaderActionCreator());
        navigateTo(paths.myTips);
        dispatch(
          openModalActionCreator({
            isError: false,
            isSuccess: true,
            message: "Tip was successfully created",
          })
        );
      } catch (error: unknown) {
        dispatch(unsetLoaderActionCreator());
        dispatch(
          openModalActionCreator({
            isError: true,
            message: (error as Error).message,
            isSuccess: false,
          })
        );
      }
    },
    [dispatch, navigateTo, token]
  );

  const loadTipById = useCallback(
    async (id: string) => {
      try {
        dispatch(setLoaderActioncreator());

        const response = await fetch(
          `${process.env.REACT_APP_URL_API}${paths.tips}${paths.slash}${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          const errorMessage = "Not possible to show the Tip";

          throw new Error(errorMessage);
        }

        const { tip } = (await response.json()) as TipsFromApi;

        dispatch(loadTipByIdActionCreator(tip));
        dispatch(unsetLoaderActionCreator());
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

  return { loadAllTips, loadMyTips, deleteTipById, createTip, loadTipById };
};

export default useApi;
