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
          {creatures.map(({ id, name }) => (
            <li className={utilStyles.listItem} key={id}>
              {name}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const creatures = [
    {
      "id": "6490481c8f6dd2b0bd3bafbb",
      "name": "Orc"
    },
    {
      "id": "6490483b39a7933ff1535e09",
      "name": "Troll"
    },
    {
      "id": "6490486679ba4f9ff19e1609",
      "name": "Demon"
    }
  ]

  return {
    props: {
      creatures
    },
  };
}