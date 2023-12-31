import Head from "next/head";
import TextInput from "@/components/TextInput";
import Form from "@/components/Form";

import { useContext, useState } from "react";
import { useRouter } from "next/router";

import designSystem from '@/styles/designSystem.module.scss';
import { AuthorizationTokenContext } from "@/contexts";
import Heading from "@/components/Heading";

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null)

  const router = useRouter();
  const { setAuthorizationToken } = useContext(AuthorizationTokenContext);
  
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      { error && <Heading size={1} className={designSystem.error}>{error}</Heading> }
      <Form title="Login" onSubmit={onSubmit}>
        <TextInput label="Email" value={email} onChangeText={setEmail} />
        <TextInput label="Password" type="password" value={password} onChangeText={setPassword} />
      </Form>
      </>
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
      setAuthorizationToken(result.authenticationToken);
      router.push('/login/success');
    } else {
      setError(result.error);
    }
  }
}
