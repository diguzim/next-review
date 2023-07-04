import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

import styles from './Navbar.module.css';
import utilStyles from '@/styles/utils.module.css';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [authenticationToken, setAuthenticationToken] = useState(null as null || String);

  useEffect(() => {
    setAuthenticationToken(localStorage.getItem('authenticationToken') as string);
  }, [setAuthenticationToken]);
  
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
      <div className={utilStyles.right}>
        {!authenticationToken && (<>
          <Link href="/login" className={styles.navbarElement}>
            <Button primary size="large" label="Login" />
          </Link>
          <Link href="/register" className={styles.navbarElement}>
            <Button primary size="large" label="Register" />
          </Link>
        </>)}
        {authenticationToken && (<>
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