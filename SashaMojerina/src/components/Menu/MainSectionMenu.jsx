import React from 'react';
import { Link } from 'react-router-dom';
import s from './MainSectionMenu.module.css';

function MainSectionMenu({ menuObj, location }) {
  return (
    <section className={s.menuBody}>
      <h2 className={s.menuNameSection}>{menuObj.name}</h2>
      <hr className={s.line} />
      <div className={s.menuGrid}>
        {menuObj.items.map((item) => (
          <div className={s.menuGridItem}>
            <div className={s.itemCenter}>
              <div className={s.itemImgContainer} style={{ backgroundImage: `url(${location === '/menu' ? item.imagePreview : item.image})` }} />
              <h3 className={s.itemName}>{item.name}</h3>
              <Link to={location === '/menu' ? `${item.href}` : `/menu/product/${item.id}`} className={s.itemLink}>
                <span className={s.hiddenVisualy} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainSectionMenu;
