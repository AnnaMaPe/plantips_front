import {
  UserCredentials,
  UserRegisterCredentials,
} from "../hooks/useUser/types";

export const mockUserLoginCredentials: UserCredentials = {
  username: "PlantLover",
  password: "12345678",
};

export const mockUserRegisterCredentials: UserRegisterCredentials = {
  ...mockUserLoginCredentials,
  email: "plant.lover@plants.com",
};
