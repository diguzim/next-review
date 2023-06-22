import Link from "next/link";
import Head from "next/head";

export default function Creatures() {
    return (
        <>
          <Head>
            <title>Creatures</title>
          </Head>
          <h1>Creatures</h1>
          <h2>
            <Link href="/">Back to home</Link>
          </h2>
        </>
      );
}