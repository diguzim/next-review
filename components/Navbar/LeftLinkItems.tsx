import Link from "next/link"
import styles from "./LeftLinkItems.module.scss"

export const LeftLinkItems = () => {
  return (
    <>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Creatures
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
    </>
  )
}
