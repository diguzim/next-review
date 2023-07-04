import Layout from "@/components/Layout";
import { useEffect } from "react"

import utilStyles from '@/styles/utils.module.css';

export default function Logout() {
  
  useEffect(() => {
    localStorage.removeItem('authenticationToken');
  }, []);
  
  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1>You have sucessfully logged out</h1>
      </section>
    </Layout>
  )
}
