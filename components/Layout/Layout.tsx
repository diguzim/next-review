import { ReactNode } from "react";
import Head from 'next/head';
import Navbar from "@/components/Navbar";

import { useAuth } from "@/hooks";

import styles from './Layout.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  const { isAuthorizationTokenLoaded } = useAuth();

  if (!isAuthorizationTokenLoaded) {
    return;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>Imagine some really nice footer here</p>
      </footer>
    </div>
  )
}
