import { Html, Head, Main, NextScript } from 'next/document'

export const siteTitle = 'Reviewing Next.js';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Reviewing Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <title>Next review</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
