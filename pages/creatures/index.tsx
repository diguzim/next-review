import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout";

import utilStyles from '@/styles/utils.module.css';

export default function Creatures({ creatures }: { creatures: any[] }) {
  return (
    <Layout>
      <Head>
        <title>Creatures</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Creatures</h2>
        <ul className={utilStyles.list}>
          {creatures.map(({ _id, name }) => (
            <li className={utilStyles.listItem} key={_id}>
              <Link href={`/creatures/${_id}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = `${process.env.BACKEND_HOST}/creatures`
  const res = await fetch(url);
  const creatures = await res.json();
  console.log(creatures);

  return {
    props: {
      creatures
    },
  };
}