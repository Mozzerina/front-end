import React from 'react';
import s from './FeaturedBlock.module.css';
import FeaturedCard from './FeaturedCard';

function FeaturedBlock() {
  return (
    <div className={s.Container}>
      <div className={s.cardsBody}>
        <FeaturedCard
          bodyStyle={s.bodyRight}
        />
        <FeaturedCard
          bodyStyle={s.bodyLeft}
        />
      </div>
    </div>
  );
}

export default FeaturedBlock;
