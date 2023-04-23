import React from 'react';
import { Link } from 'react-router-dom';
import s from './FeaturedCard.module.css';

function FeaturedCard({ bodyStyle }) {
  return (
    <div className={s.Container}>
      <div className={`${s.body} ${bodyStyle}`}>
        <div className={s.imgContainer}>
          <img alt="Iced espresso drink with creamy layers in a tall glass." src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83128.jpg" className={s.imgCards} />
        </div>
        <div className={s.textCardsContainer}>
          <div>
            <h2 className={s.headerBodyCards}>
              <span className={s.headerTextCards}>
                Новий Cinnamon Caramel Cream Nitro Cold Brew
              </span>
            </h2>
            <div className={s.textCards}>
              Оксамитовий Nitro Cold Brew,
              тепер з нотами кориці та карамелі та шовковистою холодною піною.
            </div>
            <Link to="/menu/product/2123431/iced" className={s.buttonCards}>Замовити зараз</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
