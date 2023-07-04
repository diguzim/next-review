import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/hooks";
import CreatureForm from "@/forms/CreatureForm";
import { Creature } from "@/types";
import { CreatureService } from "@/lib";

export default function EditCreature({ creature }: { creature: Creature }) {
  const [name, setName] = useState(creature.name);

  const [error, setError] = useState(null as string | null);
  const [success, setSuccess] = useState(false);

  const { authorizationToken, isLoggedIn } = useAuth();
  const router = useRouter();
  console.log('isLoggedIn', isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/creatures");
    }
  }, [isLoggedIn, router]);

  return (
    <CreatureForm
      creatureId={creature.id}
      onSubmit={onSubmit}
      success={success}
      error={error}
      name={name}
      setName={setName}
    />
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    const creatureData = { name };
    const response = await fetch(`/api/creature/${creature.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${authorizationToken}`,
      },
      body: JSON.stringify(creatureData),
    });

    if (response.ok) {
      setSuccess(true);
    } else {
      const result = await response.json();
      setError(result.error);
      setSuccess(false);
    }
  }
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
