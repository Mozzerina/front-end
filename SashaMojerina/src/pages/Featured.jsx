import React from 'react';
import s from './Featured.module.css';
import FeaturedBlock from '../components/Featured/FeaturedBlock';

function Featured() {
  return (
    <main className={s.main}>
      <div className={s.Container}>
        <div className={s.tetxBody}>
          <div className={s.textBlock}>
            <h1 className={s.text}>Свій весняний настрій</h1>
          </div>
        </div>
      </div>
      <FeaturedBlock />
      <FeaturedBlock />
    </main>
  );
}

export default Featured;
