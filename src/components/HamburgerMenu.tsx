import { useState } from "react";
import NavigationLinks from './NavigationLinks';
import { CgMenu, CgClose } from 'react-icons/cg';

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);

  const openButton = <CgMenu className='hamburger-icon' onClick={() => setOpen(!open)} />
  const closeButton = <CgClose className='hamburger-icon' onClick={() => setOpen(!open)} />

  const closeMenu = () => setOpen(false);

  return (
    <nav className='ham-nav'>
      {open ? closeButton : openButton}
      {open && <NavigationLinks isOpen={open} closeMenu={closeMenu} />}
    </nav>
  );
}
