import React from 'react';
import { Link } from 'react-router-dom';
import s from './SideBarColumn.module.css';

function SideBarColumn({ arr }) {
  return (
    <li className={s.container}>
      <span className={s.textHeader}>
        {arr.name}
      </span>
      <ul>
        {arr.items.map((element) => (
          <li className={s.item}>
            <Link className={s.itemLink} to={element.href}>{element.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default SideBarColumn;
