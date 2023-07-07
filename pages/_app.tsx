import Layout from '@/components/Layout';
import type { AppProps } from 'next/app'

import '@/styles/global.scss'
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
