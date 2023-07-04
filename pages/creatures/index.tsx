import Link from "next/link";
import Head from "next/head";
import { CreatureService } from "@/lib";

import utilStyles from '@/styles/utils.module.css';
import { Creature } from "@/types";

export default function Creatures({ creatures }: { creatures: Creature[] }) {
  return (
    <>
      <Head>
        <title>Creatures</title>
      </Head>
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
      {/* TODO: if user is logged in show some create creature button */}
    </>
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