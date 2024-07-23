import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const getCurrentLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  return (
    <>
      <nav className={css.navWrapper}>
        <NavLink to="/" className={getCurrentLink}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={getCurrentLink}>
          Catalog
        </NavLink>
        <NavLink to="/favorites" className={getCurrentLink}>
          Favorite
        </NavLink>
      </nav>
    </>
  );
}
