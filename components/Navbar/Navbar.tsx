import { useScreenSize } from '@/hooks';
import { NavbarLarge } from './NavbarLarge';

export function Navbar() {
  const size = useScreenSize();
  
  return (
    <>
      { size === "large" ? <NavbarLarge /> : <p>small</p> }
    
    
    </>
  );
}

export default Navbar;