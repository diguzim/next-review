import Head from 'next/head';
import Layout from '@/components/Layout';

import utilStyles from '@/styles/utils.module.css';
import { CreatureService } from '@/lib';
import { Creature } from '@/types';

export default function Creature({ creature }: { creature: Creature }) {
  return (
    <Layout>
      <Head>
        <title>{creature.name}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{creature.name}</h1>
      </article>
    </Layout>
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
