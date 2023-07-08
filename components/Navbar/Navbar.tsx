import { useScreenSize } from '@/hooks';
import { NavbarLarge } from './NavbarLarge';
import { NavbarSmall } from './NavbarSmall';

export function Navbar() {
  const size = useScreenSize();
  
  return (
    <>
      { size === "large" ? <NavbarLarge /> : <NavbarSmall /> }
    </>
  );
}

export default Navbar;