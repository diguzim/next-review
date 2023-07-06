import Head from "next/head";
import TextInput from "@/components/TextInput";

import utilStyles from '@/styles/utils.module.scss';
import { useState } from "react";
import { useRouter } from "next/router";
import Form from "@/components/Form";
import Heading from "@/components/Heading";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null)

  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      { error && <Heading size={2} className={utilStyles.alert}>{error}</Heading> }
      <Form title="Create your account" onSubmit={onSubmit}>
        <TextInput label="Name" value={name} onChangeText={setName} />
        <TextInput label="Email" value={email} onChangeText={setEmail} />
        <TextInput label="Password" type="password" value={password} onChangeText={setPassword} />
      </Form>
    </>
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const registerData = { name, email, password };
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerData),
    });
    
    if (response.ok) {
      setError(null);
      router.push("/register/success");
    } else {
      const result = await response.json();
      setError(result.error);
    }
    
  }
}
