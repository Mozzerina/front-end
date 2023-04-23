import React from 'react';
import { Link } from 'react-router-dom';
import s from './FeaturedCard.module.css';

function FeaturedCard({
  bodyStyle, src, link, text, head, color,
}) {
  return (
    <div className={s.Container}>
      <div className={`${s.body} ${bodyStyle}`}>
        <div className={s.imgContainer} style={{ backgroundColor: color }}>
          <img alt="Iced espresso drink with creamy layers in a tall glass." src={src} className={s.imgCards} />
        </div>
        <div className={s.textCardsContainer} style={{ backgroundColor: color }}>
          <div>
            <h2 className={s.headerBodyCards}>
              <span className={s.headerTextCards}>
                {head}
              </span>
            </h2>
            <div className={s.textCards}>
              {text}
            </div>
            <Link to={link} className={s.buttonCards}>Замовити зараз</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
