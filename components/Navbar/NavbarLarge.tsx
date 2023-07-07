import { useContext } from 'react';
import { AuthorizationTokenContext } from '@/contexts';
import Link from 'next/link';
import Image from 'next/image';

import styles from './NavbarLarge.module.scss';
import utilStyles from '@/styles/utils.module.scss';
import Button from '@/components/Button';

export const NavbarLarge = () => {
  const { authorizationToken } = useContext(AuthorizationTokenContext);

  return (
    <nav className={styles.container}>
      <Link href="/">
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
  )
}