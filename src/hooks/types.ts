export interface UserCredentials {
  username: string;
  password: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface Loginresponse {
  token: string;
}

export interface CustomTokenPayload {
  id: string;
  username: string;
  password: string;
}
