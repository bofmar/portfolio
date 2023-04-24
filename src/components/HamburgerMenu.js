import React from "react";
import NavigationLinks from './NavigationLinks';
import { CgMenu } from 'react-icons/cg';

export default function HamburgerMenu() {
  return (
    <nav className='ham-nav'>
      <CgMenu />
      <NavigationLinks />
    </nav>
  );
}
