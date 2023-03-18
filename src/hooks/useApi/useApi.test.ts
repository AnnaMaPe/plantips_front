import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { mockListOfTips, monstera } from "../../mocks/tipsMocks";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store";
import {
  deleteTipByIdActionCreator,
  loadAllTipsActionCreator,
} from "../../store/features/tips/tipsSlice";
import { ModalPayload } from "../../store/features/ui/types";
import { openModalActionCreator } from "../../store/features/ui/uiSlice";
import useApi from "./useApi";

afterEach(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useApi custom hook", () => {
  describe("When the loadAllTips function is called", () => {
    test("Then it should call the dispatch method", async () => {
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

  describe("When the loadMyTips function it is called", () => {
    test("Then it should call the dispatch method", async () => {
      const {
        result: {
          current: { loadMyTips },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await loadMyTips();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loadAllTipsActionCreator(mockListOfTips)
      );
    });
  });

  describe("When the loadMyTips function is called and the response fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch with the openModalActionCreator to show an error modal with the text 'Not possible to load your Tips'", async () => {
      const {
        result: {
          current: { loadMyTips },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: "Not possible to load your Tips",
      };

      await loadMyTips();

      expect(dispatchSpy).toHaveBeenCalledWith(openModalActionCreator(modal));
    });
  });

  describe("When the deteleTipById function it is called", () => {
    test("Then it should call the dispatch method", async () => {
      const {
        result: {
          current: { deleteTipById },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      await deleteTipById(monstera.id);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        deleteTipByIdActionCreator(monstera.id)
      );
    });
  });

  describe("When the deteleTipById function is called and the response fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch with the openModalActionCreator to show an error modal with the text 'Not possible to load your Tips'", async () => {
      const {
        result: {
          current: { deleteTipById },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: "Tip was not deleted. Try again!",
      };
      const mockedId = "12255321312";

      await deleteTipById(mockedId);

      expect(dispatchSpy).toHaveBeenCalledWith(openModalActionCreator(modal));
    });
  });

  // describe("When the createTip function it is called", () => {
  //   test("Then it should call the dispatch method", async () => {
  //     const {
  //       result: {
  //         current: { createTip },
  //       },
  //     } = renderHook(() => useApi(), { wrapper: Wrapper });

  //     await createTip(monstera);

  //     expect(dispatchSpy).toHaveBeenNthCalledWith(
  //       2,
  //       createTipActionCreator(monstera)
  //     );
  //   });
  // });

  describe("When the createTip function is called and the response fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch with the openModalActionCreator to show an error modal with the text 'Not possible to load your Tips'", async () => {
      const {
        result: {
          current: { createTip },
        },
      } = renderHook(() => useApi(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: "Tip was not created. Try again!",
      };

      await createTip(monstera);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        openModalActionCreator(modal)
      );
    });
  });
});
