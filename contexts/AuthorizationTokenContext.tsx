import { AuthorizationToken } from "@/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

interface AuthorizationTokenContextProps {
  authorizationToken: AuthorizationToken;
  setAuthorizationToken: (newValue: AuthorizationToken) => void;
}

export const AuthorizationTokenContext = createContext<AuthorizationTokenContextProps>({} as AuthorizationTokenContextProps);

export const AuthorizationTokenProvider = ({ children }: { children: ReactNode }) => {
  const [authorizationToken, setAuthorizationToken] = useState<AuthorizationToken>(null);

  useEffect(() => {
    setAuthorizationToken(localStorage.getItem('authorizationToken'));
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
        setAuthorizationToken: setAuthorizationTokenAndLocalStorage as Dispatch<SetStateAction<AuthorizationToken>>
      }}
    >
      {children}
    </AuthorizationTokenContext.Provider>
  );
}
