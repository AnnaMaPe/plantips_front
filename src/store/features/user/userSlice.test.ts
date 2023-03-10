import { UserState } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer reducer", () => {
  describe("When it receives an user that is not logged and the loginUser action", () => {
    test("Then it should return the same user but logged in", () => {
      const userInitialState: UserState = {
        id: "1234",
        username: "PlantLover",
        token: "mocken",
        isLogged: false,
      };
      const expectedUserFinalState: UserState = {
        id: "1234",
        username: "PlantLover",
        token: "mocken",
        isLogged: true,
      };

      const loginUserAction = loginUserActionCreator(userInitialState);
      const newUserState = userReducer(userInitialState, loginUserAction);

      expect(newUserState).toStrictEqual(expectedUserFinalState);
    });
  });
});
