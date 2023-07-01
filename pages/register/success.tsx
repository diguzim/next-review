import Head from "next/head";
import Layout from "@/components/Layout";

import utilStyles from '@/styles/utils.module.css';
import { useState } from "react";

export default function Register() {
  return (
    <Layout>
      <Head>
        <title>Sign up</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>Thanks for registering</h1>
      </section>
    </Layout>
  );
}
