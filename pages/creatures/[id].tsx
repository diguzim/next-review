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

export async function getStaticProps({ params: { id }}: { params: { id: string } }) {
    const creature = {
        id: id,
        name: 'Orc'
    }

    return {
      props: {
        creature,
      },
    };
  }

export async function getStaticPaths() {
  const ids = [1, 2, 3];

    const paths = ids.map((id) => {
        return {
            params: {
                id: id.toString(),
            }
        }
    });

  return {
    paths,
    fallback: false,
  };
}
