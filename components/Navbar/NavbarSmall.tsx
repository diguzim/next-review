import { useState } from 'react';

import styles from './NavbarSmall.module.scss';

import { MdMenu, MdClose, MdPerson } from 'react-icons/md'
import { LeftLinkItems } from './LeftLinkItems';
import { HomeLink } from './HomeLink';
import { RightLinkItems } from './RightLinkItems';

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
        <HomeLink />
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
        <LeftLinkItems />
      </ul>
    )}

    {isRightMenuOpen && (
      <ul className={`${styles.menuItems} ${styles.right}`}>
        <RightLinkItems />
      </ul>
    )}
    </>
    
  )
}

