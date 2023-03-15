import { useCallback } from "react";
import { UseTokenStructure } from "./types";
import decodeToken from "jwt-decode";
import { CustomTokenPayload } from "../useUser/types";
import { useAppDispatch } from "../../store/hooks";
import { loginUserActionCreator } from "../../store/features/user/userSlice";

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const saveToken = useCallback(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const { sub: id, username } = decodeToken<CustomTokenPayload>(token);
      dispatch(loginUserActionCreator({ id, username, token }));
    }
  }, [dispatch]);
  return { saveToken };
};

export default useToken;
