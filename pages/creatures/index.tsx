import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout";

export default function Creatures() {
    return (
        <Layout>
          <Head>
            <title>Creatures</title>
          </Head>
          <h1>Creatures</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </Layout>
      );
}