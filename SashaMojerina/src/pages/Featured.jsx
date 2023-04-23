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
      <FeaturedBlock
        leftSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83129.jpg"
        leftLink="/menu/product/132"
        leftText="A hand-shaken combination of Starbucks® Blonde espresso and caramelized vanilla accents, topped with a splash of oatmilk."
        leftHead="Toasted Vanilla Oatmilk Shaken Espresso"
        rightSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83128.jpg"
        rightLink="/menu/product/133"
        rightText="Оксамитовий Nitro Cold Brew,
        тепер з нотами кориці та карамелі та шовковистою холодною піною."
        rightHead=" Новий Cinnamon Caramel Cream Nitro Cold Brew"

      />
      <FeaturedBlock
        leftSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83127.jpg"
        leftLink="/menu/product/135"
        leftText="Flavors of passionfruit and açaí, real strawberry pieces and coconutmilk come together."
        leftHead="Pink Drink Starbucks Refreshers® Beverage"
        rightSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83126.jpg"
        rightLink="/menu/product/139"
        rightText="A tropical blend of real pineapple pieces, passionfruit accents and coconutmilk."
        rightHead="Paradise Drink Starbucks Refreshers® Beverage"
        color="#a0c292"
      />
      <FeaturedBlock
        leftSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83127.jpg"
        leftLink="/menu/product/140"
        leftText="Vanilla-flavored sweet cream adds the finishing touch to our Nitro Cold Brew."
        leftHead="Vanilla Sweet Cream Nitro Cold Brew"
        rightSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83122.jpg"
        rightLink="/menu/product/140"
        rightText="Velvety Nitro Cold Brew, now with cinnamon and caramel notes and silky cold foam."
        rightHead="New Cinnamon Caramel Cream Nitro Cold Brew"
        color="#ffc519"
      />
      <FeaturedBlock
        leftSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83525.jpg"
        leftLink="/menu/product/168"
        leftText="Sous-vide style cage-free eggs with kale, portabella mushrooms and Monterey Jack cheese."
        leftHead="Kale & Mushroom Egg Bites"
        rightSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83524.jpg"
        rightLink="/menu/product/164"
        rightText="An Impossible™ Sausage Patty Made From Plants, a cage-free fried egg and Cheddar on a sesame ciabatta bun.*"
        rightHead="Impossible™ Breakfast Sandwich"
        color="#d4e9e2"
      />
    </main>
  );
}

export default Featured;
