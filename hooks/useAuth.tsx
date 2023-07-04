import { AuthorizationTokenContext } from '@/contexts';
import { useState, useEffect, useContext } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { authorizationToken } = useContext(AuthorizationTokenContext);

  useEffect(() => {
    setIsLoggedIn(!!authorizationToken);
  }, [authorizationToken]);

  return {
    isLoggedIn,
    authorizationToken
  };
};
