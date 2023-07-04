import { useEffect } from "react"

export default function Logout() {
  
  useEffect(() => {
    localStorage.removeItem('authenticationToken');
  }, []);
  
  return (
    <h1>You have sucessfully logged out</h1>
  )
}
