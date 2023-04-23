import React, { useEffect, useState } from 'react';
import {
  Link, NavLink, useLocation,
} from 'react-router-dom';
import axios from 'axios';
import s from './Menu.module.css';
import SideBarColumn from '../components/Menu/SideBarColumn';
import MainSectionMenu from '../components/Menu/MainSectionMenu';
import Preloader from '../components/Preloader/Preloader';

const setActive = ({ isActive }) => (isActive ? `${s.menuLink} ${s.acive}` : s.menuLink);

function Menu({
  loading, setLoading, setUrlText, setUrl,
}) {
  const location = useLocation();
  const [menuData, setMenuData] = useState([]);
  const [data, setData] = useState([]);
  const headingText = (location.pathname.substring(location.pathname.lastIndexOf('/') + 1)).replace(/-/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  useEffect(() => {
    axios.get('https://localhost:7128/api/Menu')
      .then((resp) => {
        setMenuData(resp.data);
        setLoading(false);
      });

    axios.get(`https://localhost:7128/api/SubProduct?link=${location.pathname}`)
      .then((resp) => {
        setData(resp.data);
        setUrlText(headingText);
        setUrl(location.pathname);
        setLoading(false);
      });
    setLoading(true);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <main className={s.main}>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className={s.menuPanel}>
            <nav className={s.menu}>
              <ul className={s.menuList}>
                <li className={s.menuItem}>
                  <NavLink to="/menu" className={setActive}>Всі продукти</NavLink>
                </li>
                <li className={s.menuItem}>
                  <NavLink to="/menu/featured/" className={setActive}>Рекомендовані</NavLink>
                </li>
                <li className={s.menuItem}>
                  <NavLink to="/menu/previous" className={setActive}>Попередні замовлення</NavLink>
                </li>
                <li className={s.menuItem}>
                  <NavLink to="/menu/favorites" className={setActive}>Улюблені продукти</NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className={s.mainContainer}>
            <nav className={s.sideBar}>
              <ul>
                {menuData.map((e) => (
                  <SideBarColumn
                    arr={e}
                  />
                ))}
              </ul>
            </nav>
            <div className={s.mainMainContainer}>
              {location.pathname !== '/menu' && (
                <div className={s.titleBody}>
                  <Link className={s.titleLink} to="/menu">Menu</Link>
                  <span>/</span>
                  <span className={s.titleName}>{headingText}</span>
                </div>
              )}
              <h1 className={s.headingText}>{headingText}</h1>
              {location.pathname === '/menu' ? (menuData.map((e) => (
                <MainSectionMenu location={location.pathname} menuObj={e} />
              )))
                : (
                  data.map((e) => (
                    <MainSectionMenu
                      location={location.pathname}
                      menuObj={e}
                    />
                  ))
                )}
            </div>
          </div>
        </>
      )}

    </main>
  );
}

export default Menu;
