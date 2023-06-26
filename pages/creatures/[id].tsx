import Head from 'next/head';
import Layout from '@/components/layout';

import utilStyles from '@/styles/utils.module.css';

export default function Creature({ creature }: { creature: any }) {
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
  const url = `${process.env.BACKEND_HOST}/creatures/${id}`
  const res = await fetch(url);
  const creature = await res.json();

  return {
    props: {
      creature,
    },
  };
}

export async function getStaticPaths() {
  const url = `${process.env.BACKEND_HOST}/creatures`
  const res = await fetch(url);
  const creatures = await res.json();

  const paths = creatures.map((creature: any) => {
    return {
      params: {
        id: creature._id,
      }
    }
  });

  return {
    paths,
    fallback: false,
  };
}
