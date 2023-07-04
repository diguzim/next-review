import { AuthorizationToken } from "@/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface AuthorizationTokenContextProps {
  authorizationToken: AuthorizationToken;
  setAuthorizationToken: (newValue: AuthorizationToken) => void;
  isAuthorizationTokenLoaded: boolean;
}

export const AuthorizationTokenContext = createContext<AuthorizationTokenContextProps>({} as AuthorizationTokenContextProps);

export const AuthorizationTokenProvider = ({ children }: { children: ReactNode }) => {
  const [authorizationToken, setAuthorizationToken] = useState<AuthorizationToken>(null);
  const [isAuthorizationTokenLoaded, setIsAuthorizationTokenLoaded] = useState<boolean>(false);

  useEffect(() => {
    setAuthorizationToken(localStorage.getItem('authorizationToken'));
    setIsAuthorizationTokenLoaded(true);
  }, [setAuthorizationToken]);

  function setAuthorizationTokenAndLocalStorage(authorizationToken: AuthorizationToken) {
    if (authorizationToken === null) {
      localStorage.removeItem('authorizationToken');
    } else {
      localStorage.setItem('authorizationToken', authorizationToken);
    }

    setAuthorizationToken(authorizationToken);
  }

  return (
    <AuthorizationTokenContext.Provider
      value={{
        authorizationToken,
        setAuthorizationToken: setAuthorizationTokenAndLocalStorage as Dispatch<SetStateAction<AuthorizationToken>>,
        isAuthorizationTokenLoaded
      }}
    >
      {children}
    </AuthorizationTokenContext.Provider>
  );
}
