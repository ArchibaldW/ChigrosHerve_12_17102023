import Logo from './logo.svg';
import { NavLink } from 'react-router-dom';

import './style.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img
          src={Logo}
          alt="Logo"
          className="navbar__img"
        />
      </NavLink>
      <div className="navbar__menu">
        <NavLink
          className="navbar__link"
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className="navbar__link"
          to="/profile"
        >
          Profil
        </NavLink>
        <NavLink
          className="navbar__link"
          to="/settings"
        >
          Réglage
        </NavLink>
        <NavLink
          className="navbar__link"
          to="/community"
        >
          Communauté
        </NavLink>
      </div>
    </nav>
  );
}
