import { renderHook } from "@testing-library/react";
import useUser from "./useUser";
import { Wrapper } from "../../mocks/Wrapper";
import { store } from "../../store";
import { CustomTokenPayload, UserCredentials } from "../useUser/types";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import { User } from "../../store/features/user/types";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { ModalPayload } from "../../store/features/ui/types";
import { openModalActionCreator } from "../../store/features/ui/uiSlice";

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
  sub: "36",
  username: mockedUserCredentials.username,
};

const mocken = "ThisIsAToken";

const mockedLoggedinUser: User = {
  id: mockenPayload.sub,
  username: mockenPayload.username,
  token: mocken,
};
describe("Given the useUser custom hook", () => {
  describe("When the loginUser function is called", () => {
    test("Then it should call the dispatch with the action to log in the user", async () => {
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
  describe("When the loginUser function is called and the request to login fails", () => {
    beforeEach(() => {
      server.resetHandlers(...errorHandlers);
    });
    test("Then it should call the dispatch with the openModalActionCreator to show an error modal with the text 'Wrong credentials'", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      const modal: ModalPayload = {
        isError: true,
        isSuccess: false,
        message: "Wrong credentials",
      };

      await loginUser(mockedUserCredentials);

      expect(dispatchSpy).toHaveBeenCalledWith(openModalActionCreator(modal));
    });
  });

  describe("When the logoutUser function is called", () => {
    test("Then it should call the dispatch to show a succes modal", async () => {
      const {
        result: {
          current: { logoutUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      await logoutUser();

      const modal: ModalPayload = {
        isError: false,
        isSuccess: true,
        message: "You were successfully logedout!",
      };

      expect(dispatchSpy).toHaveBeenCalledWith(openModalActionCreator(modal));
    });
  });
});
