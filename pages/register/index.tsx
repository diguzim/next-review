import Head from "next/head";
import Layout from "@/components/Layout";
import TextInput from "@/components/TextInput";

import utilStyles from '@/styles/utils.module.css';
import { useState } from "react";
import { useRouter } from "next/router";
import Form from "@/components/Form";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null)

  const router = useRouter();
  
  return (
    <Layout>
      <Head>
        <title>Sign up</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        { error && <h2 className={utilStyles.alert}>{error}</h2> }
        <Form title="Create your account" onSubmit={onSubmit}>
          <TextInput label="Name" value={name} onChangeText={setName} />
          <TextInput label="Email" value={email} onChangeText={setEmail} />
          <TextInput label="Password" type="password" value={password} onChangeText={setPassword} />
        </Form>
      </section>
    </Layout>
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
