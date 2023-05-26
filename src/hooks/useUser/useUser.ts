import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../store/features/user/userSlice";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UserRegisterCredentials,
  UseUserStructure,
} from "./types";
import {
  openModalActionCreator,
  setLoaderActioncreator,
  unsetLoaderActionCreator,
} from "../../store/features/ui/uiSlice";
import useToken from "../useToken/useToken";
import { paths } from "../../routers/paths";

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const { deleteToken } = useToken();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      dispatch(setLoaderActioncreator());

      const response = await fetch(
        `${process.env.REACT_APP_URL_API}${paths.users}${paths.login}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-type": "application/json" },
        }
      );

      dispatch(unsetLoaderActionCreator());

      if (!response.ok) {
        const wrongCredentials = "Wrong credentials";

        const wrongCredentialsError = new Error(wrongCredentials);

        throw wrongCredentialsError;
      }

      const { token }: LoginResponse = await response.json();

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { sub: id, username } = tokenPayload;

      dispatch(loginUserActionCreator({ id, username, token }));

      localStorage.setItem("token", token);
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;
      dispatch(
        openModalActionCreator({
          isError: true,
          message: errorMessage,
          isSuccess: false,
        })
      );
    }
  };

  const logoutUser = () => {
    deleteToken();
    dispatch(logoutUserActionCreator());
    dispatch(
      openModalActionCreator({
        isError: false,
        isSuccess: true,
        message: "You were successfully logged out!",
      })
    );
  };

  const registerUser = async (userCredentials: UserRegisterCredentials) => {
    dispatch(setLoaderActioncreator());

    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL_API}${paths.users}${paths.register}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-type": "application/json" },
        }
      );

      if (!response.ok) {
        const wrongCredentials = "User was not created. Try again!";

        const wrongCredentialsError = new Error(wrongCredentials);

        throw wrongCredentialsError;
      }

      dispatch(unsetLoaderActionCreator());

      dispatch(
        openModalActionCreator({
          isError: false,
          message: "You were succesfully registered",
          isSuccess: true,
        })
      );
    } catch (error: unknown) {
      const errorMessage = (error as Error).message;

      dispatch(
        openModalActionCreator({
          isError: true,
          message: errorMessage,
          isSuccess: false,
        })
      );
    }
  };

  return { loginUser, logoutUser, registerUser };
};

export default useUser;
