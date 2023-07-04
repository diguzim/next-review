import { AuthenticationTokenContext } from "@/contexts";
import { useContext, useEffect } from "react";

export default function Logout() {
  const { setAuthenticationToken } = useContext(AuthenticationTokenContext);

  useEffect(() => {
    setAuthenticationToken(null);
  }, [setAuthenticationToken]);
  
  return (
    <h1>You have sucessfully logged out</h1>
  )
}
