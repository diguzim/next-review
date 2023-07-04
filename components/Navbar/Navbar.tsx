import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import { AuthorizationTokenContext } from '@/contexts';

import styles from './Navbar.module.css';
import utilStyles from '@/styles/utils.module.css';

export function Navbar() {
  const { authorizationToken } = useContext(AuthorizationTokenContext);
  
  return (
    <nav className={styles.container}>
      <Link href="/" className={utilStyles.colorInherit}>
        <Image
          priority
          src="/images/Gaz'Haragoth.gif"
          className={utilStyles.borderCircle}
          height={64}
          width={64}
          alt="Gaz\'Haragoth"
        />
      </Link>
      <Link href="/creatures" className={styles.navbarElement}>
        Creatures
      </Link>
      <Link href="/creatures" className={styles.navbarElement}>
        Items
      </Link>
      <div className={utilStyles.right}>
        {!authorizationToken && (<>
          <Link href="/login" className={styles.navbarElement}>
            <Button primary size="large" label="Login" />
          </Link>
          <Link href="/register" className={styles.navbarElement}>
            <Button primary size="large" label="Register" />
          </Link>
        </>)}
        {authorizationToken && (<>
          <Link href="/logout" className={styles.navbarElement}>
            <Button size="large" label="Logout" />
          </Link>
          <Link href="/account" className={styles.navbarElement}>
            <Button primary size="large" label="Account" />
          </Link>
        </>)}
      </div>
    </nav>
  );
}

export default Navbar;