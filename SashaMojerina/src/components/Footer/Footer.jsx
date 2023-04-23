import React from 'react';
import { Link } from 'react-router-dom';
import {
  faSpotify, faFacebook, faPinterest, faTwitter, faYoutube,

} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import s from './Footer.module.css';

function Footer() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <footer className={s.footer}>
      <div className={s.footerBody}>
        <div className={s.footerHeader}>
          <div className={s.menuFooterColumn}>
            <h2 className={s.menuFooterTitle}>Про нас</h2>
            <ul className={s.footerList}>
              <li><Link onClick={handleClick} to="/about-us/" className={s.menuFooterLink}>Наша компанія</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Наша кава</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Історії та новини</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Архів Starbucks</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Відносини з інвесторами</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Обслуговування клієнтів</Link></li>
            </ul>
          </div>
          <div className={s.menuFooterColumn}>
            <h2 className={s.menuFooterTitle}>
              {'Кар\'єра'}
            </h2>
            <ul className={s.footerList}>
              <li><Link to="/" className={s.menuFooterLink}>Культура та цінності</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Включення, різноманітність і справедливість</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>План досягнень коледжу</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>{'Кар\'єра в Україні'}</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>{'Міжнародна кар\'єра'}</Link></li>
            </ul>
          </div>
          <div className={s.menuFooterColumn}>
            <h2 className={s.menuFooterTitle}>Соціальний вплив</h2>
            <ul className={s.footerList}>
              <li><Link to="/" className={s.menuFooterLink}>Люди</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Планета</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Звіт про екологічний і соціальний вплив</Link></li>
            </ul>
          </div>
          <div className={s.menuFooterColumn}>
            <h2 className={s.menuFooterTitle}>Для ділових партнерів</h2>
            <ul className={s.footerList}>
              <li><Link to="/" className={s.menuFooterLink}>Центр підтримки орендодавців</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Постачальники</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Продаж корпоративних подарункових карток</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Кава офісу та громадського харчування</Link></li>
            </ul>
          </div>
          <div className={s.menuFooterColumn}>
            <h2 className={s.menuFooterTitle}>Замовлення та самовивіз</h2>
            <ul className={s.footerList}>
              <li><Link to="/" className={s.menuFooterLink}>Замовляйте в додатку</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Замовляйте в Інтернеті</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Доставка</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Варіанти замовлення та самовивезення</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Відносини з інвесторами</Link></li>
              <li><Link to="/" className={s.menuFooterLink}>Дослідіть і знайдіть каву для дому</Link></li>
            </ul>
          </div>
        </div>
        <hr className={s.line} />
        <ul className={s.footerIconBody}>
          <li className={s.footerIconItem}>
            <a className={s.footerIconLink} href="https://open.spotify.com/">
              <FontAwesomeIcon className={s.footerIcon} icon={faSpotify} />
            </a>
            <a className={s.footerIconLink} href="https://open.spotify.com/">
              <FontAwesomeIcon className={s.footerIcon} icon={faFacebook} />
            </a>
            <a className={s.footerIconLink} href="https://open.spotify.com/">
              <FontAwesomeIcon className={s.footerIcon} icon={faPinterest} />
            </a>
            <a className={s.footerIconLink} href="https://open.spotify.com/">
              <FontAwesomeIcon className={s.footerIcon} icon={faYoutube} />
            </a>
            <a className={s.footerIconLink} href="https://open.spotify.com/">
              <FontAwesomeIcon className={s.footerIcon} icon={faTwitter} />
            </a>
          </li>
        </ul>
        <ul className={s.footerFooter}>
          <li className={s.footerFooterItem}>
            <a className={s.footerFooterLink} href="/#">Повідомлення про конфіденційність</a>
          </li>
          <li className={s.footerFooterItem}>
            <a className={s.footerFooterLink} href="/#">Умови використання</a>
          </li>
          <li className={s.footerFooterItem}>
            <a className={s.footerFooterLink} href="/#">Не передавати мою особисту інформацію</a>
          </li>
          <li className={s.footerFooterItem}>
            <a className={s.footerFooterLink} href="/#">Закон CA Supply Chain</a>
          </li>
          <li className={s.footerFooterItem}>
            <a className={s.footerFooterLink} href="/#">Налаштування файлів cookie</a>
          </li>
        </ul>
        <p className={s.text}>© 2023 Mozzerina Coffee Company. Всі права захищені.</p>
      </div>
    </footer>
  );
}

export default Footer;
