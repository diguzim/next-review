import Link from 'next/link'
import Head from 'next/head';
import Layout from '@/components/layout';

import utilStyles from '@/styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Next review</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <h1>Welcome to Home</h1>
        <h2>
          <Link href="/creatures">Creatures</Link>
        </h2>
      </section>
    </Layout>
  )
}
