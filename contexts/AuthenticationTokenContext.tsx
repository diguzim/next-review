import { AuthenticationToken } from "@/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface AuthenticationTokenContextProps {
  authenticationToken: AuthenticationToken;
  setAuthenticationToken: (newValue: AuthenticationToken) => void;
}

export const AuthenticationTokenContext = createContext<AuthenticationTokenContextProps>({} as AuthenticationTokenContextProps);

export const AuthenticationTokenProvider = ({ children }: { children: ReactNode }) => {
  const [authenticationToken, setAuthenticationToken] = useState<AuthenticationToken>(null);

  useEffect(() => {
    setAuthenticationToken(localStorage.getItem('authenticationToken'));
  }, [setAuthenticationToken]);

  function setAuthenticationTokenAndLocalStorage(authenticationToken: AuthenticationToken) {
    if (authenticationToken === null) {
      localStorage.removeItem('authenticationToken');
    } else {
      localStorage.setItem('authenticationToken', authenticationToken);
    }

    setAuthenticationToken(authenticationToken);
  }

  return (
    <AuthenticationTokenContext.Provider
      value={{
        authenticationToken,
        setAuthenticationToken: setAuthenticationTokenAndLocalStorage as Dispatch<SetStateAction<AuthenticationToken>>
      }}
    >
      {children}
    </AuthenticationTokenContext.Provider>
  );
}
