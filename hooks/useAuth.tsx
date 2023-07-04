import { AuthorizationTokenContext } from '@/contexts';
import { useState, useEffect, useContext } from 'react';

export const useAuth = () => {
  const { authorizationToken } = useContext(AuthorizationTokenContext);
  const [isLoggedIn, setIsLoggedIn] = useState(!!authorizationToken);

  useEffect(() => {
    setIsLoggedIn(!!authorizationToken);
  }, [authorizationToken]);

  return {
    isLoggedIn,
    authorizationToken
  };
};
