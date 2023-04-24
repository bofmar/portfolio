import React from "react";
import NavMenu from './NavMenu';
import HamburgerMenu from './HamburgerMenu';

export default function HeaderNav() {
  return (
    <header>
      <NavMenu />
      <HamburgerMenu />
    </header>
  );
}
