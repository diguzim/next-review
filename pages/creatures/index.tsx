import Link from "next/link";
import Head from "next/head";
import { CreatureService } from "@/lib";

import utilStyles from '@/styles/utils.module.css';
import { Creature } from "@/types";
import { useAuth } from "@/hooks";
import Table from "@/components/Table";

export default function Creatures({ creatures }: { creatures: Creature[] }) {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Head>
        <title>Creatures</title>
      </Head>
      <h1 className={utilStyles.headingLg}>Creatures</h1>

      <Table.Table>
        <Table.TableHead>
          <Table.TableRow>
            <Table.TableCell>Name</Table.TableCell>
            <Table.TableCell>Items</Table.TableCell>
          </Table.TableRow>
        </Table.TableHead>
        <Table.TableBody>
          {creatures.map(({ id, name }) => (
            <Table.TableRow key={id}>
              <Table.TableCell>
                <Link href={`/creatures/${id}`}>
                  {name}
                </Link>
              </Table.TableCell>
              <Table.TableCell>
                {/* {items.map(({ id, name }) => (
                  <Link href={`/items/${id}`} id={id}>
                    {name}
                  </Link>
                ))} */}
                ...
              </Table.TableCell>
            </Table.TableRow>
          ))}
        </Table.TableBody>
      </Table.Table>
      
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