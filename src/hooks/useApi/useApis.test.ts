import { renderHook } from "@testing-library/react";
import { mockListOfTips } from "../../mocks/tipsMocks";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store";
import { loadAllTipsActionCreator } from "../../store/features/tips/tipsSlice";
import useApi from "./useApi";

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
});
