import Link from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import { CreatureService } from "@/lib";

import utilStyles from '@/styles/utils.module.css';
import { Creature } from "@/types";

export default function Creatures({ creatures }: { creatures: Creature[] }) {
  return (
    <Layout>
      <Head>
        <title>Sign up</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Sign up</h2>
        
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