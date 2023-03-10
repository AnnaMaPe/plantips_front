import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { loginUserActionCreator } from "../../store/userSlice/userSlice";
import {
  CustomTokenPayload,
  LoginResponse,
  UserCredentials,
  UseUserStructure,
} from "./types";

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_URL_API;

  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-type": "application/json" },
    });

    const { token }: LoginResponse = await response.json();

    const tokenPayload: CustomTokenPayload = decodeToken(token);

    const { id, username } = tokenPayload;

    dispatch(loginUserActionCreator({ id, username, token }));

    localStorage.setItem("token", token);
  };

  return { loginUser };
};

export default useUser;
