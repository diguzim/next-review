import Form from "@/components/Form";
import TextInput from "@/components/TextInput";
import { useContext, useEffect, useState } from "react";

import utilStyles from "@/styles/utils.module.css";
import { AuthorizationTokenContext } from "@/contexts";

export default function NewCreature() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null as string | null);
  const [success, setSuccess] = useState(false);

  const { authorizationToken } = useContext(AuthorizationTokenContext);

  useEffect(() => {
    // TODO check if user is logged in
    // Redirect to home if not
  }, []);

  return (
    <>
      { success && <h2 className={utilStyles.success}>Creature created!</h2> }
      { error && <h2 className={utilStyles.alert}>{error}</h2> }
      <Form title="Create a new creature" onSubmit={onSubmit}>
        <TextInput label="Name" value={name} onChangeText={setName} />
      </Form>
    </>
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      setName("");
      setError(null);
      setSuccess(true);
    } else {
      const result = await response.json();
      setError(result.error);
      setSuccess(false);
    }
  }
}