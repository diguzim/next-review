import { AuthorizationTokenContext } from "@/contexts";
import { useContext, useEffect } from "react";

export default function Logout() {
  const { setAuthorizationToken } = useContext(AuthorizationTokenContext);

  useEffect(() => {
    setAuthorizationToken(null);
  }, [setAuthorizationToken]);
  
  return (
    <h1>You have sucessfully logged out</h1>
  )
}
