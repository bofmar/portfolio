import NavigationLinks from './NavigationLinks';

export default function NavMenu() {
  return (
    <nav className='default-nav'>
      <NavigationLinks isOpen={false} />
    </nav>
  );
}
