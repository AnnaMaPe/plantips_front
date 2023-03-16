import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const userInitialState: UserState = {
  id: "",
  username: "",
  token: "",
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (
      currentUserState: UserState,
      action: PayloadAction<User>
    ): UserState => ({
      ...currentUserState,
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (): UserState => ({ ...userInitialState }),
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
