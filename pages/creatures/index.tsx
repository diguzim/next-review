import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/layout";
import { CreatureService } from "@/lib";

import utilStyles from '@/styles/utils.module.css';
import { Creature } from "@/types";

export default function Creatures({ creatures }: { creatures: Creature[] }) {
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
              <Link href={`/creatures/${id}`}>
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
  const creatures = await CreatureService.getAll();

  return {
    props: {
      creatures
    },
  };
}