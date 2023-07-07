import Form from "@/components/Form";
import Heading from "@/components/Heading";
import TextInput from "@/components/TextInput";
import designSystem from "@/styles/designSystem.module.scss";

interface FormProps {
  creatureId?: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  success: boolean;
  error: string | null;
  name: string;
  setName: (name: string) => void;
}

export default function CreatureForm({ creatureId, onSubmit, success, error, name, setName }: FormProps) {
  return (
    <>
      { success &&
        <Heading size={2} className={designSystem.success}>
          {!creatureId ? "Creature created sucessfully!" : "Creature updated sucessfully!"}
        </Heading>
      }
      { !!error && <Heading size={2} className={designSystem.error}>{error}</Heading> }
      <Form title={!creatureId ? "Create a new creature" : "Update creature" } onSubmit={onSubmit}>
        <TextInput label="Name" value={name} onChangeText={setName} />
      </Form>
    </>
  );
}
