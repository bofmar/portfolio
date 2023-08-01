interface INavigationLinks {
	isOpen: boolean;
	closeMenu?: () => void;
}
export default function NavigationLinks({ isOpen, closeMenu }: INavigationLinks) {
  return (
    <ul>
      <li onClick={() => isOpen && closeMenu && closeMenu()}><a href='#home'>HOME</a></li>
      <li onClick={() => isOpen && closeMenu && closeMenu()}><a href='#about'>ABOUT</a></li>
      <li onClick={() => isOpen && closeMenu && closeMenu()}><a href='#projects'>PROJECTS</a></li>
      <li onClick={() => isOpen && closeMenu && closeMenu()}><a href='#contact'>CONTACT</a></li>
    </ul>
  );
}
