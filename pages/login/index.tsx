import Head from "next/head";
import Layout from "@/components/Layout";
import TextInput from "@/components/TextInput";
import Form from "@/components/Form";

import { useState } from "react";
import { useRouter } from "next/router";

import utilStyles from '@/styles/utils.module.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null)

  const router = useRouter();
  
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        { error && <h2 className={utilStyles.alert}>{error}</h2> }
        <Form title="Login" onSubmit={onSubmit}>
          <TextInput label="Email" value={email} onChangeText={setEmail} />
          <TextInput label="Password" type="password" value={password} onChangeText={setPassword} />
        </Form>
      </section>
    </Layout>
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const registerData = { email, password };
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(registerData),
    });

    const result = await response.json();
    
    if (response.ok) {
      setError(null);
      localStorage.setItem('authenticationToken', result.authenticationToken);
      router.push('/login/success');
    } else {
      setError(result.error);
    }
  }
}