import Layout from '@/components/Layout';
import type { AppProps } from 'next/app'

import '@/styles/globals.scss'
import { AuthorizationTokenProvider, ThemesProvider } from '@/contexts';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemesProvider>
      <AuthorizationTokenProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout> 
      </AuthorizationTokenProvider>
    </ThemesProvider>
  );
}
