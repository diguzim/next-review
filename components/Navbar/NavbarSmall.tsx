import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './NavbarSmall.module.scss';
import utilStyles from '@/styles/utils.module.scss';

import { MdMenu, MdClose, MdPerson } from 'react-icons/md'

export const NavbarSmall = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);

  const openLeftMenu = () => {
    setIsLeftMenuOpen(true);
    setIsRightMenuOpen(false);
  }

  const openRightMenu = () => {
    setIsLeftMenuOpen(false);
    setIsRightMenuOpen(true);
  }

  const closeMenu = () => {
    setIsLeftMenuOpen(false);
    setIsRightMenuOpen(false);
  }

  return (
    <>
      <nav className={styles.mainNav}>
      <>
        {!isLeftMenuOpen && (
          <MdMenu onClick={openLeftMenu} />
        )}
        {isLeftMenuOpen && (
          <MdClose onClick={closeMenu} />
        )}
      </>
      <>
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
      </>
      <>
        {!isRightMenuOpen && (
          <MdPerson onClick={openRightMenu} />
        )}
        {isRightMenuOpen && (
          <MdClose onClick={closeMenu} />
        )}
      </>
    </nav>
    {isLeftMenuOpen && (
      <ul className={`${styles.menuItems} ${styles.left}`}>
        <li>
          <Link href="/creatures" className={styles.navbarElement}>
            Creatures
          </Link>
        </li>
        <HypotheticalHugeAmountOfLinks />
      </ul>
    )}

    {isRightMenuOpen && (
      <ul className={`${styles.menuItems} ${styles.right}`}>
        <HypotheticalHugeAmountOfLinks />
      </ul>
      //     {!authorizationToken && (<>
      //       <Link href="/login" className={styles.navbarElement}>
      //         <Button primary size="large" label="Login" />
      //       </Link>
      //       <Link href="/register" className={styles.navbarElement}>
      //         <Button primary size="large" label="Register" />
      //       </Link>
      //     </>)}
      //     {authorizationToken && (<>
      //       <Link href="/logout" className={styles.navbarElement}>
      //         <Button size="large" label="Logout" />
      //       </Link>
      //       <Link href="/account" className={styles.navbarElement}>
      //         <Button primary size="large" label="Account" />
      //       </Link>
      //     </>)}
      //   </div>
    )}
    </>
    
  )
}

const HypotheticalHugeAmountOfLinks = () => {
  return (
    <>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
        </Link>
      </li>
      <li>
        <Link href="/creatures" className={styles.navbarElement}>
          Items
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