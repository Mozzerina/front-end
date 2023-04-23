import React from 'react';
import s from './Main.module.css';
import image2 from '../../assets/image1.jpg';
import image3 from '../../assets/image2.jpg';
import image4 from '../../assets/image3.jpg';
import image1 from '../../assets/image5.jpg';
import Post from './Post';

function Main() {
  return (
    <main className={s.main}>
      <Post
        image={image1}
        title="Більше ковтків, більше подорожей"
        info="Приєднайтеся до Mozzerina® Rewards
        і зв’яжіть свій обліковий запис Delta SkyMiles® до 31/31,
        щоб отримати 200 зірок,
        500 миль або обидва!*"
        position
        btn="Приєднатися"
        link="/login/"
      />
      <Post
        image={image3}
        title="Скрасьте свій день"
        info="Насолоджуйтесь бадьорим
        напоєм Pink Drink, Paradise Drink або
        Dragon Drink® Mozzerina Refreshers®."
        color="#FF7D7D"
        btn="Замовити зараз"
        link="/menu/drinks/hot-coffees"
      />
      <Post
        image={image4}
        title="Піднімає настрій у будь-який час"
        info="Зарядіться енергійним еспресо з вівсяного
        молока з коричневим цукром або збовтаного еспресо
        з ванільним вівсяним молоком — 140 калорій або менше в гранде."
        color="#d85c12"
        btn="Замовити зараз"
        position
        link="/menu/food/hot-breakfast"

      />
      <Post
        image={image2}
        title="Піднімає настрій у будь-який час"
        info="Зарядіться енергійним еспресо з вівсяного
        молока з коричневим цукром або збовтаного еспресо
        з ванільним вівсяним молоком — 140 калорій або менше в гранде."
        color="#ffd080"
        btn="Замовити зараз"
        link="/menu/food/hot-breakfast"
      />
      <div className={s.contentContainer}>
        <div className={s.contentBody}>
          <div className={s.content}>
            *У магазинах-учасниках. Застосовуються деякі обмеження.
            Бонус за посилання відкритий лише для нових учасників.
            Щоб отримати повну інформацію, відвідайте
            <a className={s.link} href="https://www.instagram.com/sashakastom/"> https://www.instagram.com/sashakastom/</a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
