import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit";
import { uiReducer } from "./features/ui/uiSlice";
import { userReducer } from "./features/user/userSlice";

const rootReducer = combineReducers({ user: userReducer, ui: uiReducer });

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({ reducer: rootReducer, preloadedState });
};

export const store = configureStore({
  reducer: { user: userReducer, ui: uiReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
