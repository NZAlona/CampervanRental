import Navigation from './Navigation';
import css from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={css.navHeader}>
      <Navigation />
    </header>
  );
}
