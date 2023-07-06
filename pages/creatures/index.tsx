import Link from "next/link";
import Head from "next/head";
import { CreatureService } from "@/lib";

import { Creature } from "@/types";
import { useAuth } from "@/hooks";
import Table from "@/components/Table";
import Heading from "@/components/Heading";

export default function Creatures({ creatures }: { creatures: Creature[] }) {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Head>
        <title>Creatures</title>
      </Head>
      <Heading size={1}>Creatures</Heading>

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