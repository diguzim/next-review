import Link from "next/link";
import Head from "next/head";
import { CreatureService } from "@/lib";

import utilStyles from '@/styles/utils.module.css';
import { Creature } from "@/types";
import { useAuth } from "@/hooks";

export default function Creatures({ creatures }: { creatures: Creature[] }) {
  const { isLoggedIn } = useAuth();

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
      {isLoggedIn && (
        <Link href="/creatures/new">
          Create new creature
        </Link>
      )}
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