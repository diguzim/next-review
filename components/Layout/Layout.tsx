import { ReactNode } from "react";
import Head from 'next/head';

import styles from './Layout.module.css';
import Navbar from "@/components/Navbar";
import { useAuth } from "@/hooks";

export const siteTitle = 'Reviewing Next.js';

export default function Layout({ children }: { children: ReactNode }) {
  const { isAuthorizationTokenLoaded } = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Reviewing Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <title>Next review</title>
      </Head>
      { isAuthorizationTokenLoaded && 
        <>
          <Navbar />
          <main className={styles.main}>{children}</main>
        </>
      }
    </div>
  )
}
