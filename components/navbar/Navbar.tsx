import Image from 'next/image';

import styles from './navbar.module.css';
import utilStyles from '@/styles/utils.module.css';
import Link from 'next/link';

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({ }) => {
  return (
    <nav className={styles.container}>
      <Link href="/" className={utilStyles.colorInherit}>
        <Image
          priority
          src="/images/Gaz'Haragoth.gif"
          className={utilStyles.borderCircle}
          height={64}
          width={64}
          alt=""
        />
      </Link>
      <Link href="/creatures" className={styles.navbarElement}>
        Creatures
      </Link>
      <Link href="/creatures" className={styles.navbarElement}>
        Items
      </Link>
      <Link href="/creatures" className={styles.navbarElement}>
        Something
      </Link>
    </nav>
  );
}

export default Navbar;