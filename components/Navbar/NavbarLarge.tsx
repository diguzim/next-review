import { LeftLinkItems } from './LeftLinkItems';
import { RightLinkItems } from './RightLinkItems';
import { HomeLink } from './HomeLink';

import styles from './NavbarLarge.module.scss';
import utilStyles from '@/styles/utils.module.scss';

export const NavbarLarge = () => {
  return (
    <nav className={styles.container}>
      <ul className={`${styles.menuItems}`}>
        <li><HomeLink /></li>
        <LeftLinkItems />
      </ul>
      <ul className={`${styles.menuItems} ${utilStyles.right}`}>
        <RightLinkItems />
      </ul>
    </nav>
  )
}