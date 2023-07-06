import Head from 'next/head';

import { CreatureService } from '@/lib';
import { Creature } from '@/types';
import Heading from '@/components/Heading';

export default function Creature({ creature }: { creature: Creature }) {
  return (
    <>
      <Head>
        <title>{creature.name}</title>
      </Head>
      <article>
        <Heading size={1}>{creature.name}</Heading>
      </article>
    </>
  );
}

export async function getStaticProps({ params: { id } }: { params: { id: string } }) {
  const creature = await CreatureService.get(id);

  return {
    props: {
      creature,
    },
  };
}

export async function getStaticPaths() {
  const creatures = await CreatureService.getAll();

  const paths = creatures.map((creature: Creature) => {
    return {
      params: {
        id: creature.id,
      }
    }
  });

  return {
    paths,
    fallback: false,
  };
}
