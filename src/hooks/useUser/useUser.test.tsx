import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store";
import { CustomTokenPayload, UserCredentials } from "../useUser/types";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/userSlice/userSlice";
import { User } from "../../store/userSlice/types";

jest.mock("jwt-decode", () => jest.fn());

beforeAll(() => {
  jest.clearAllMocks();
});

const dispatchSpy = jest.spyOn(store, "dispatch");

const mockedUserCredentials: UserCredentials = {
  username: "Plantlover",
  password: "12345678",
};

const mockenPayload: CustomTokenPayload = {
  id: "36",
  username: mockedUserCredentials.username,
};

const mocken = "ThisIsAToken";

describe("Given the useUser custom hook", () => {
  describe("When the loginUser function is called", () => {
    test("Then it should call the dispatch", async () => {
      const mockedLoggedinUser: User = {
        id: mockenPayload.id,
        username: mockenPayload.username,
        token: mocken,
      };

      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockenPayload
      );

      await loginUser(mockedUserCredentials);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(mockedLoggedinUser)
      );
    });
  });
});
