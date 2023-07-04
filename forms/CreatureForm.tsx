import Form from "@/components/Form";
import TextInput from "@/components/TextInput";
import utilStyles from "@/styles/utils.module.css";

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
        <h2 className={utilStyles.success}>
          {!creatureId ? "Creature created sucessfully!" : "Creature updated sucessfully!"}
        </h2>
      }
      { !!error && <h2 className={utilStyles.alert}>{error}</h2> }
      <Form title={!creatureId ? "Create a new creature" : "Update creature" } onSubmit={onSubmit}>
        <TextInput label="Name" value={name} onChangeText={setName} />
      </Form>
    </>
  );
}
