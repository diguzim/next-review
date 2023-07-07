import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { Table, TableHead, TableBody, TableRow, TableCell } from "@/components/Table";
import Heading from "@/components/Heading";

import { CreatureService } from "@/lib";
import { Creature } from "@/types";
import { useAuth } from "@/hooks";

import designSystem from "@/styles/designSystem.module.scss";
import styles from './index.module.scss';

export default function Creatures({ creatures }: { creatures: Creature[] }) {
  const { isLoggedIn, authorizationToken } = useAuth();

  const [error, setError] = useState(null as string | null);

  async function onDelete(creatureId: string) {
    const confirmation = confirm('Are you sure you want to delete this creature?');

    if (confirmation) {
      setError(null);

      const response = await fetch(`/api/creature/${creatureId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authorizationToken}`,
        }
      });
  
      if (!response.ok) {
        const result = await response.json();
        setError(result.error);
      }
    }

  }

  return (
    <>
      <Head>
        <title>Creatures</title>
      </Head>
      <Heading size={1}>Creatures</Heading>
      { !!error && <Heading size={2} className={designSystem.error}>{error}</Heading> }
      
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Items</TableCell>
            { isLoggedIn && (
              <TableCell>Actions</TableCell>  
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {creatures.map(({ id, name }) => (
            <TableRow key={id}>
              <TableCell>
                <Link href={`/creatures/${id}`}>
                  {name}
                </Link>
              </TableCell>
              <TableCell>
                {/* {items.map(({ id, name }) => (
                  <Link href={`/items/${id}`} id={id}>
                    {name}
                  </Link>
                ))} */}
                ...
              </TableCell>
              { isLoggedIn && (
                <TableCell className={styles.centeredContainer}>
                  <Link href={`/creatures/${id}/edit`}>
                    Edit
                  </Link>
                  <Link href="#" onClick={() => onDelete(id as string)}>
                    Delete
                  </Link>
                </TableCell>  
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
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