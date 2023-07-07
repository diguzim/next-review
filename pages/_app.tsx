import Layout from '@/components/Layout';
import type { AppProps } from 'next/app'

import '@/styles/globals.scss'
import { AuthorizationTokenProvider, IconProvider, ThemesProvider } from '@/contexts';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ThemesProvider>
      <IconProvider>
        <AuthorizationTokenProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout> 
        </AuthorizationTokenProvider>
      </IconProvider>
    </ThemesProvider>
  );
}
