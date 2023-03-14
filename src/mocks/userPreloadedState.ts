import { UserState } from "../store/features/user/types";

export const userIsLoggedState: UserState = {
  username: "",
  id: "",
  token: "",
  isLogged: true,
};
