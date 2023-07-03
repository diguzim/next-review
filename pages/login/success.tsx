import Head from "next/head";
import Layout from "@/components/Layout";

import utilStyles from '@/styles/utils.module.css';

export default function Register() {
  return (
    <Layout>
      <Head>
        <title>Sign up</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>You are logged in</h1>
      </section>
    </Layout>
  );
}
