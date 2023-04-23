import React from 'react';
import s from './Nutrion.module.css';

function NutrionColumn({ hText, title }) {
  return (

    <div className={s.nutrionSection}>
      <h2 className={s.headingSection}>
        <span className={s.headingBottomBorder}>{hText}</span>
      </h2>
      <p className={s.textSection}>
        {title}
      </p>
      <div className={s.nutrionTable} />
    </div>

  );
}

export default NutrionColumn;
