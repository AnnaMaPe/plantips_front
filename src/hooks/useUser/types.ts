export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegisterCredentials extends UserCredentials {
  email: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
  logoutUser: () => void;
  registerUser: (UserCredentials: UserRegisterCredentials) => Promise<void>;
}

export interface LoginResponse {
  token: string;
}

export interface CustomTokenPayload {
  sub: string;
  username: string;
}
