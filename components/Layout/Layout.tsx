import { ReactNode } from "react";
import Head from 'next/head';

import styles from './Layout.module.css';
import Navbar from "@/components/Navbar";

export const siteTitle = 'Reviewing Next.js';

export default function Layout({ children }: { children: ReactNode }) {
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
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  )
}