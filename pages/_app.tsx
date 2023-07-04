import Layout from '@/components/Layout';
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { AuthorizationTokenProvider } from '@/contexts';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <AuthorizationTokenProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </AuthorizationTokenProvider>
  );
}
