import { UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

const userInitialState: UserState = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};
const loggedUserState: UserState = {
  id: "1234",
  username: "PlantLover",
  token: "mocken",
  isLogged: true,
};

describe("Given a userReducer reducer", () => {
  describe("When it receives an user that is not logged and the loginUser action", () => {
    test("Then it should return the same user but logged in", () => {
      const loginUserAction = loginUserActionCreator(loggedUserState);
      const newUserState = userReducer(loggedUserState, loginUserAction);

      expect(newUserState).toStrictEqual(loggedUserState);
    });
  });

  describe("When it receives an user that is logged and the logoutUser action", () => {
    test("Then it should return the same user but logged out", () => {
      const logoutUserAction = logoutUserActionCreator();
      const newUserState = userReducer(loggedUserState, logoutUserAction);

      expect(newUserState).toStrictEqual(userInitialState);
    });
  });
});
