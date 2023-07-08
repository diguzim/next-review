import { useScreenSize } from '@/hooks';
import { NavbarLarge } from './NavbarLarge';
import { NavbarSmall } from './NavbarSmall';

import styles from './Navbar.module.scss'

export function Navbar() {
  const size = useScreenSize();
  
  return (
    <header className={styles.header}>
      { size === "large" ? <NavbarLarge /> : <NavbarSmall /> }
    </header>
  );
}

export default Navbar;