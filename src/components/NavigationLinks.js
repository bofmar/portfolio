import React from "react";

export default function NavigationLinks({ isOpen, closeMenu }) {
  return (
    <ul>
      <li onClick={() => isOpen && closeMenu()}><a href='#home'>HOME</a></li>
      <li onClick={() => isOpen && closeMenu()}><a href='#about'>ABOUT</a></li>
      <li onClick={() => isOpen && closeMenu()}><a href='#projects'>PROJECTS</a></li>
      <li onClick={() => isOpen && closeMenu()}><a href='#contact'>CONTACT</a></li>
    </ul>
  );
}
