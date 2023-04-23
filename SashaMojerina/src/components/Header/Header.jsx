import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './Header.module.css';

const setActive = ({ isActive }) => (isActive ? `${s.menuLink} ${s.acive}` : s.menuLink);

function Header() {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Link to="/" className={s.headerLogo}>
          Mozzerina
        </Link>
        <nav className={s.headerMenu}>
          <ul className={s.menuList}>
            <li className={s.menuItem}>
              <NavLink to="/menu" className={setActive}>Меню</NavLink>
            </li>
            <li className={s.menuItem}>
              <NavLink to="/reward" className={setActive}>Нагороди</NavLink>
            </li>
            <li className={s.menuItem}>
              <NavLink to="/giftcards" className={setActive}>Подарунковi кари</NavLink>
            </li>
          </ul>
        </nav>
        <div className={s.searchContainer}>
          <FontAwesomeIcon className={s.icon} icon={faLocationDot} />
          <Link to="/giftcards" className={s.searchLink}>Знайти магазин</Link>
        </div>
        <div className={s.btnContainer}>
          <button type="submit" className={s.loginBtn}>
            <Link className={s.loginLink} to="/login">Увiйти</Link>
          </button>
          <button type="submit" className={s.registerBtn}>
            <Link className={s.registerLink} to="/register">Приєднуйся зараз!</Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
