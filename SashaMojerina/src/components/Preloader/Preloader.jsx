import React from 'react';
import s from './Preloader.module.css';

function Preloader() {
  return (
    <div className={s.preloaderContainer}>
      <div className={s.preloader} />
    </div>
  );
}

export default Preloader;
