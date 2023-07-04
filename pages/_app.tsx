import Layout from '@/components/Layout';
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { AuthenticationTokenContext } from '@/contexts';
import { useEffect, useState } from 'react';

import { Dispatch, SetStateAction } from 'react';
import { AuthenticationToken } from '@/types';

export default function App({ Component, pageProps }: AppProps) {
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
  
  return(
    <AuthenticationTokenContext.Provider
      value={{
        authenticationToken,
        setAuthenticationToken: setAuthenticationTokenAndLocalStorage as Dispatch<SetStateAction<AuthenticationToken>>
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </AuthenticationTokenContext.Provider>
  );
}
