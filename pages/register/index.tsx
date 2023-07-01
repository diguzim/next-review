import Head from "next/head";
import Layout from "@/components/Layout";
import TextInput from "@/components/TextInput";

import utilStyles from '@/styles/utils.module.css';
import Button from "@/components/Button";
import { useState } from "react";
import { useRouter } from "next/router";

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
        <h1 className={utilStyles.headingLg}>Sign up</h1>
        { error && <h2 className={utilStyles.alert}>{error}</h2> }
        <form onSubmit={onSubmit}>
          <TextInput label="Name" value={name} onChangeText={setName} />
          <TextInput label="Email" value={email} onChangeText={setEmail} />
          <TextInput label="password" value={password} onChangeText={setPassword} />
          <Button type="submit" primary size="large" label="Submit" />
        </form>
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
