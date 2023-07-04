import Layout from '@/components/Layout';
import type { AppProps } from 'next/app'

import '@/styles/globals.css'
import { AuthenticationTokenProvider } from '@/contexts';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <AuthenticationTokenProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout> 
    </AuthenticationTokenProvider>
  );
}
