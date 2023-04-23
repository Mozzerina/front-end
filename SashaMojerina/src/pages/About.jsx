import React from 'react';
import s from './About.module.css';
import image1 from '../assets/image6.jpg';
import image2 from '../assets/image7.jpg';
import image3 from '../assets/image8.jpg';
import image4 from '../assets/image9.jpg';

function About() {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <h1 className={s.text}>Наша компанія</h1>
      </div>
      <div className={s.ourContainer}>
        <div className={s.ourBody}>
          <div className={s.ourImgContainer}>
            <img className={s.ourImg} src={image1} alt="Storefront" />
          </div>
          <div className={s.ourTextBody}>
            <div className={s.ourContent}>
              <h2 className={s.ourTexHeader}>Наша спадщина</h2>
              <div className={s.ourTextMain}>
                <p>
                  Наша історія починається в 1971 році на брукованих вулицях історичного
                  ринку Пайк-Плейс у Сіетлі. Саме тут Starbucks відкрив свій перший магазин,
                  пропонуючи свіжообсмажену каву в зернах, чай і спеції з усього світу,
                  щоб наші клієнти могли взяти їх додому. Наша назва була натхненна
                  класичною казкою «Мобі Дік», згадуючи морські традиції
                  перших торговців кавою.
                </p>
                <p>
                  Десять років потому молодий житель Нью-Йорка на ім’я Говард Шульц увійшов у ці
                  двері й був зачарований кавою Starbucks із першого ковтка. Після приєднання до
                  компанії в 1982 році інший брукований шлях приведе його до ще одного відкриття.
                  Саме під час поїздки до Мілана в 1983 році Говард вперше познайомився з
                  італійськими кав’ярнями, і він повернувся до Сіетла, натхненний принести
                  тепло та артистизм його кавової культури в Starbucks.
                  До 1987 року ми поміняли наші коричневі фартухи на зелені
                  й розпочали нашу наступну главу як кав’ярню.
                </p>
                <p>
                  Starbucks незабаром розшириться до Чикаго та Ванкувера, Канада,
                  а потім до Каліфорнії, Вашингтона та Нью-Йорка. У 1996 році ми
                  перетнули Тихий океан, щоб відкрити наш перший магазин у Японії,
                  потім у Європі в 1998 році та Китаї в 1999 році.
                  Протягом наступних двох десятиліть ми зростатимемо до мільйонів
                  клієнтів щотижня та станемо частиною тканини десятки тисяч районів
                  по всьому світу.У всьому, що ми робимо, ми завжди віддані нашій
                  місії: надихати та плекати людський
                  дух – одну людину, одну чашку та одне сусідство за раз.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={s.ourContainer}>
        <div className={s.ourBody}>
          <div className={s.ourImgContainer}>
            <img className={s.ourImg} src={image2} alt="Storefront" />
          </div>
          <div className={s.ourTextBody}>
            <div className={s.ourContent}>
              <h2 className={s.ourTexHeader}>Кава та крафт</h2>
              <div className={s.ourTextMain}>
                <p>
                  Щоб створити ідеальну чашку кави, потрібно багато рук: від фермерів,
                  які піклуються про червоні стиглі кавові вишні, до майстрів обсмажування,
                  які вимагають найкраще з кожного зерна, і до бариста, який дбайливо подає її.
                  Ми прагнемо дотримуватись найвищих стандартів якості та обслуговування,
                  використовуємо нашу спадщину та впроваджуємо інновації,
                  щоб створити нові враження, щоб насолодитися ними.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={s.ourContainer}>
        <div className={s.ourBody}>
          <div className={s.ourImgContainer}>
            <img className={s.ourImg} src={image3} alt="Storefront" />
          </div>
          <div className={s.ourTextBody}>
            <div className={s.ourContent}>
              <h2 className={s.ourTexHeader}>Наша спадщина</h2>
              <div className={s.ourTextMain}>
                <p>
                  Ми любимо казати, що ми працюємо не в кавовому бізнесі,
                  який обслуговує людей, а в бізнесі, який обслуговує людей кавою.
                  Наші співробітники, яких ми називаємо партнерами, знаходяться в
                  центрі роботи Starbucks. Ми прагнемо пишатися нашими партнерами
                  та інвестуємо в їх здоров’я, благополуччя та успіх,
                  а також створюємо культуру приналежності, де всі раді.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={s.ourContainer}>
        <div className={s.ourBody}>
          <div className={s.ourImgContainer}>
            <img className={s.ourImg} src={image4} alt="Storefront" />
          </div>
          <div className={s.ourTextBody}>
            <div className={s.ourContent}>
              <h2 className={s.ourTexHeader}>Ми віримо в прагнення творити добро</h2>
              <div className={s.ourTextMain}>
                <p>
                  Як це було з самого початку, наша мета виходить
                  далеко за межі прибутку. Ми віримо, що Starbucks
                  може і повинна мати позитивний вплив на громади, які ми обслуговуємо.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

export default About;
