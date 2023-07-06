import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/hooks";
import CreatureForm from "@/forms/CreatureForm";

export default function NewCreature() {
  const [name, setName] = useState("");

  const [error, setError] = useState(null as string | null);
  const [success, setSuccess] = useState(false);

  const { authorizationToken, isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/creatures");
    }
  }, [isLoggedIn, router]);

  return (
    <CreatureForm
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
    const response = await fetch("/api/creature", {
      method: "POST",
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
    }
  }
}