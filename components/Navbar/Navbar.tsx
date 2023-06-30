import Image from 'next/image';

import styles from './navbar.module.css';
import utilStyles from '@/styles/utils.module.css';
import Link from 'next/link';
import Button from '../Button';

interface NavbarProps {

}

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const onLogin = () => {
    console.log('Login');
  }
  const onCreateAccount = () => {
    console.log('Create account');
  }

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
        <Link href="/creatures" className={styles.navbarElement}>
          <Button primary size="small" onClick={onLogin} label="Log in" />
        </Link>
        <Link href="/creatures" className={styles.navbarElement}>
          <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;