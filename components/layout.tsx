import { ReactNode } from "react";
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";

import styles from './layout.module.css';
import utilStyles from '@/styles/utils.module.css';

export const siteTitle = 'Reviewing Next.js';

export default function Layout({ children, home }: { children: ReactNode, home?: boolean }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Reviewing Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
        {
          home ? (
            <>
              <Image
                priority
                src="/images/Gaz'Haragoth.gif"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
            </>
          ) : (
            <>
              <h2 className={utilStyles.headingLg}>
                <Link href="/" className={utilStyles.colorInherit}>
                  Home
                </Link>
              </h2>
            </>
          )
        }
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}