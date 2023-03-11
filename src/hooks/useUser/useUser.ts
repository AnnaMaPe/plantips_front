import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { loginUserActionCreator } from "../../store/features/user/userSlice";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UseUserStructure,
} from "./types";
import { showErrorModal } from "../../modals/modals";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_URL_API;
  const loginEndpoint = "/users/login";

  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(`${apiUrl}${loginEndpoint}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) {
        const wrongCredentials = "Wrong credentials";

        const wrongCredentialsError = new Error(wrongCredentials);

        throw wrongCredentialsError;
      }

      const { token }: LoginResponse = await response.json();

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { id, username } = tokenPayload;

      dispatch(loginUserActionCreator({ id, username, token }));

      localStorage.setItem("token", token);
    } catch (error: unknown) {
      showErrorModal((error as Error).message);
    }
  };
  return { loginUser };
};

export default useUser;
