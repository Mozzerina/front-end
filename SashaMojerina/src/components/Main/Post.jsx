import React from 'react';
import { Link } from 'react-router-dom';
import s from './Post.module.css';

function Post({
  image, title, info,
  position, color, backgroundImage, btn,
}) {
  return (
    <div className={s.container}>
      <div className={s.body}>
        {position
          ? (
            <>
              <div className={s.titleBlock} style={{ background: color }}>
                <div className={s.titleContent}>
                  <h1 className={s.title}>{title}</h1>
                  <div className={s.info}>{info}</div>
                  <Link className={s.btn} to="/login">{btn}</Link>
                </div>
              </div>
              <div className={s.imgBlock} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <img className={s.block} src={image} alt="" />
              </div>
            </>
          )
          : (
            <>
              <div className={s.imgBlock} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <img className={s.block} src={image} alt="" />
              </div>
              <div className={s.titleBlock} style={{ background: color }}>
                <div className={s.titleContent}>
                  <h1 className={s.title}>{title}</h1>
                  <div className={s.info}>
                    {info}
                  </div>
                  <Link className={s.btn} to="/login">{btn}</Link>
                </div>
              </div>
            </>
          )}
      </div>
    </div>

  );
}

export default Post;
