import { AuthenticationToken } from "@/types";
import { createContext } from "react";

interface AuthenticationTokenContextProps {
  authenticationToken: AuthenticationToken;
  setAuthenticationToken: (newValue: AuthenticationToken) => void;
}

export const AuthenticationTokenContext = createContext<AuthenticationTokenContextProps>({} as AuthenticationTokenContextProps);
