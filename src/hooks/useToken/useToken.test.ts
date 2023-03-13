import { renderHook } from "@testing-library/react";
import { Wrapper } from "../../mocks/Wrapper";
import { useAppDispatch } from "../../store/hooks";
import decodeToken from "jwt-decode";
import useToken from "./useToken";
import { mockenPayload } from "../../mocks/tokenMocks";
import { loginUserActionCreator } from "../../store/features/user/userSlice";

jest.mock("../../store/hooks");

jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => {
  jest.clearAllMocks();
});

describe("Given the useToken customHook", () => {
  describe("When the saveToken function is called", () => {
    test("Then the dispatch should be called", () => {
      const mocken = "ThisIsAToken";
      localStorage.setItem("token", mocken);
      const mockDispatch = jest.fn();
      (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockenPayload
      );

      const {
        result: {
          current: { saveToken },
        },
      } = renderHook(() => useToken(), { wrapper: Wrapper });
      saveToken();

      expect(mockDispatch).toHaveBeenCalledWith(
        loginUserActionCreator({
          id: "12345",
          username: "PlantLover",
          token: mocken,
        })
      );

      localStorage.clear();
    });
  });
});
