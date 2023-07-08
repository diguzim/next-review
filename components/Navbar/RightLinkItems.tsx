import { useAuth } from "@/hooks/useAuth";
import Link from "next/link"
import styles from "./LeftLinkItems.module.scss"
import Button from "@/components/Button";
import { useScreenSize } from "@/hooks";

export const RightLinkItems = () => {
  const { authorizationToken } = useAuth();
  const size = useScreenSize();
  
  return (
    <>
      {!authorizationToken && (<>
        <li>
          <Link href="/login" className={styles.navbarElement}>
            {linkContent("Login")}
          </Link>
        </li>
        <li>
          <Link href="/register" className={styles.navbarElement}>
            {linkContent("Register")}
          </Link>
        </li>
      </>)}
      {authorizationToken && (<>
        <li>
          <Link href="/logout" className={styles.navbarElement}>
            {linkContent("Logout")}
          </Link>
        </li>
        <li>
          <Link href="/account" className={styles.navbarElement}>
            {linkContent("Account")}
          </Link>
        </li>
      </>)}
    </>
  )

  function linkContent(text: string) {
    if (size === "large") {
      return <Button primary size="large" label={text} />
    }
    
    return text;
  }
}
