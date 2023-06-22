import Link from 'next/link'
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next review</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home</h1>
        <h2>
          <Link href="/creatures">Creatures</Link>
        </h2>
      </main>
    </>
  )
}
