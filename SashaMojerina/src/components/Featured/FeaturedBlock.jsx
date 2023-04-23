import React from 'react';
import s from './FeaturedBlock.module.css';
import FeaturedCard from './FeaturedCard';

function FeaturedBlock({
  leftSrc, leftLink, leftText, leftHead, rightSrc, rightLink,
  rightText,
  rightHead, color,
}) {
  return (
    <div className={s.Container}>
      <div className={s.cardsBody}>
        <FeaturedCard
          src={rightSrc}
          link={rightLink}
          text={rightText}
          head={rightHead}
          bodyStyle={s.bodyRight}
          color={color}
        />
        <FeaturedCard
          src={leftSrc}
          link={leftLink}
          text={leftText}
          head={leftHead}
          bodyStyle={s.bodyLeft}
          color={color}
        />
      </div>
    </div>
  );
}

export default FeaturedBlock;
