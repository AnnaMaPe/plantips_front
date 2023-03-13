import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { mockListOfTips } from "../../mocks/tipsMocks";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store";
import { loadAllTipsActionCreator } from "../../store/features/tips/tipsSlice";
import { ModalPayload } from "../../store/features/ui/types";
import { openModalActionCreator } from "../../store/features/ui/uiSlice";
import useApi from "./useApi";

jest.mock("jwt-decode", () => jest.fn());

afterEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useApi custom hook", () => {
  describe("When the loadAllTips function is called", () => {
    test("Then it should the dispatch", async () => {
      const {
        result: {
          current: { loadAllTips },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await loadAllTips();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loadAllTipsActionCreator(mockListOfTips)
      );
    });
  });
  describe("When the loadAllTips function is called and the response fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch with the openModalActionCreator to show an error modal with the text 'Not possible to load Tips'", async () => {
      const {
        result: {
          current: { loadAllTips },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: "Not possible to load Tips",
      };

      await loadAllTips();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator(modal)
      );
    });
  });
});
