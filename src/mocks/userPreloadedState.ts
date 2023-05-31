import { UserState } from "../store/features/user/types";

export const preloadedIsLoggedUser: UserState = {
  username: "PlantLover",
  id: "640631137b5cc26616353c5e",
  token: "sfsadvfdsafgaesdgdsaf<sfsdf",
  isLogged: true,
};

export const preloadedNotLogedUser: UserState = {
  ...preloadedIsLoggedUser,
  isLogged: false,
};
