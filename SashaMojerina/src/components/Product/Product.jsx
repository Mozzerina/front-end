import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { faCircleExclamation, faLocationDot, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import s from './Product.module.css';
import MultipleSelect from '../DropDown';
import Preloader from '../Preloader/Preloader';
import NutrionColumn from '../Nutrion/NutrionColumn';

function Product() {
  const [data, setData] = useState();
  const [selectedOption, setSelectedOption] = useState('grande');
  const [load, setLoad] = useState(true);
  const [isNutrion, setIsNutrion] = useState(false);

  const { id } = useParams();

  const handleClick = () => {
    setIsNutrion(true);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    axios.get(`https://localhost:7128/api/Product?id=${id}`)
      .then((resp) => {
        setData(resp.data);
        setLoad(false);
      });
  }, []);

  // const headingText = (data.link.substring(data.link.lastIndexOf('/') + 1)).replace(/-/g, ' ')
  //   .split(' ')
  //   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //   .join(' ');

  const optionToMargin = {
    tall: '6px',
    grande: '78px',
    venti: '150px',
    trenta: '222px',
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <main className={s.main}>
      {load ? (
        <Preloader />
      ) : (
        <>
          <div className={s.headerTitleContainer}>
            <Link to="/menu" className={s.headerTitleLink}>Menu </Link>
            <span>/</span>
            <Link to={data.link} className={s.headerTitleLink}>
              {' '}
              {(data.link.substring(data.link.lastIndexOf('/') + 1)).replace(/-/g, ' ')
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
              {' '}
            </Link>
            <span>/</span>
            <span>
              {' '}
              {data.product.name}
            </span>
          </div>
          <div className={s.headerContainerPhoto}>
            <div className={s.headerBody}>
              <div className={s.headerPhoto}>
                <div className={s.photoBody}>
                  <img className={s.photo} alt="" src={data.product.image} />
                </div>
              </div>
              <div className={s.headerTextContainer}>
                <h1 className={s.headerText}>{data.product.name}</h1>
                <div className={s.headerTextFlex}>
                  <span className={s.headerTextCount}>
                    {(selectedOption === 'tall' && data.product.short)
                    || (selectedOption === 'grande' && data.product.tall)
                    || (selectedOption === 'venti' && data.product.grande)
                    || ((selectedOption === 'trenta' && data.product.venti))}

                  </span>
                  <span className={s.headerTextCalories}>calories</span>
                  <span className={s.headerTextCalories}>
                    <span className={s.caloriesIconWrapper}>
                      <div className={s.caloriesIconRelative}>
                        <button className={s.caloriesIconButton} type="submit">
                          <FontAwesomeIcon className={s.caloriesIcon} icon={faCircleExclamation} />
                        </button>
                      </div>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {isNutrion ? (
            <div className={s.nutrionMainContainer}>
              <div className={s.nutrionMainBody}>
                <button onClick={() => setIsNutrion(false)} type="submit" className={s.nutrionMainButton}>
                  <FontAwesomeIcon icon={faChevronLeft} className={s.nutrionMainSvg} />
                  Back
                </button>
                <div className={s.nutrionMainFlex}>
                  <div className={s.nutrionFlexGrowColumnLeft}>
                    <NutrionColumn
                      hText="Інгредієнти"
                      title={data.product.ingredients}
                    />
                    <NutrionColumn
                      hText="Алергени"
                      title={data.product.allergens}
                    />
                  </div>
                  <div className={s.nutrionFlexGrowColumnRight}>
                    <NutrionColumn
                      hText="Харчування"
                      title={data.product.nutrition}
                    />
                  </div>

                </div>
              </div>
            </div>
          ) : (
            <div className={s.mainContainer}>
              <div className={s.mainBody}>
                <div className={s.mainFlexContainer}>
                  <div className={s.flexGrowColumnLeft}>
                    <h2 className={s.headingtext}>
                      <span className={s.headingBottomBorder}>Size options</span>
                    </h2>
                    {data.sizeOpts && (
                    <form className={s.gridBlock}>
                      <fieldset>
                        <div className={s.gridItem}>
                          <div
                            className={s.activeCircle}
                            style={{ marginLeft: optionToMargin[selectedOption] }}
                          />
                          <label>
                            <input
                              type="radio"
                              className={s.radioButton}
                              onChange={handleOptionChange}
                              value="tall"
                              checked={selectedOption === 'tall'}
                            />
                            <div
                              className={s.cursorPointer}
                              style={{
                                backgroundImage: selectedOption !== 'tall' ? "url('https://www.starbucks.com/app-assets/76b8892b0db8f5d411988fe1bbbe4141.svg')" : "url('https://www.starbucks.com/app-assets/c6d5ff0dfccfc8966d3ad8ab2331921f.svg')",
                              }}
                            />
                            <p className={s.headingTextItem}>Tall</p>
                            <p className={s.textItem}>12 fl oz</p>
                          </label>
                        </div>
                        <div className={s.gridItem}>
                          <label>
                            <input
                              type="radio"
                              className={s.radioButton}
                              onChange={handleOptionChange}
                              value="grande"
                              checked={selectedOption === 'grande'}
                            />
                            <div
                              className={s.cursorPointer}
                              style={{
                                backgroundImage: selectedOption !== 'grande' ? "url('https://www.starbucks.com/app-assets/2920fb2a8c34d3ddb95ad262872526e9.svg')" : "url('https://www.starbucks.com/app-assets/2362af789511c4dbe2446445dcc324f8.svg')",
                              }}
                            />
                            <p className={s.headingTextItem}>Grande</p>
                            <p className={s.textItem}>16 fl oz</p>
                          </label>
                        </div>
                        <div className={s.gridItem}>
                          <label>
                            <input
                              type="radio"
                              className={s.radioButton}
                              onChange={handleOptionChange}
                              value="venti"
                              checked={selectedOption === 'venti'}
                            />
                            <div
                              className={s.cursorPointer}
                              style={{
                                backgroundImage: selectedOption !== 'venti' ? "url('https://www.starbucks.com/app-assets/55e7819f7cf8e1959ec35e680d46d9a9.svg')" : "url('https://www.starbucks.com/app-assets/04342268ae304f7757dddb04a8e43b74.svg')",
                              }}
                            />
                            <p className={s.headingTextItem}>Venti</p>
                            <p className={s.textItem}>24 fl oz</p>
                          </label>
                        </div>
                        <div className={s.gridItem}>
                          <label>
                            <input
                              type="radio"
                              className={s.radioButton}
                              onChange={handleOptionChange}
                              value="trenta"
                              checked={selectedOption === 'trenta'}
                            />
                            <div
                              className={s.cursorPointer}
                              style={{
                                backgroundImage: selectedOption !== 'trenta' ? "url('https://www.starbucks.com/app-assets/3abf3fc78365ef0b59bbfd0ecd1c8490.svg')" : "url('https://www.starbucks.com/app-assets/35ede7fba1a65e6f50ee927c5ecd6024.svg')",
                              }}
                            />
                            <p className={s.headingTextItem}>Trenta</p>
                            <p className={s.textItem}>30 fl oz</p>
                          </label>
                        </div>

                      </fieldset>
                    </form>
                    )}

                    <div className={s.storeToViewContainer}>
                      <div className={s.storeToViewFlexBox}>
                        <FontAwesomeIcon className={s.storeToViewSvg} icon={faLocationDot} />
                        <span className={s.storeToViewText}>
                          Select a store to view availability
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={s.flexGrowColumnRight}>
                    <h2 className={s.headingtext}>
                      <span className={s.headingBottomBorder}>Customizations</span>
                    </h2>
                    <div className={s.editContainer}>
                      <div className={s.editBody}>
                        <MultipleSelect />
                        <MultipleSelect />
                        <MultipleSelect />
                        <MultipleSelect />
                        <MultipleSelect />
                        <MultipleSelect />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className={s.footerBlockContainer}>
            <aside className={s.footerBlockBody}>
              <div className={s.footerBlockFlex}>
                <div className={s.footerFlexGrowColumnLeft}>
                  <p className={s.footerStarCost}>
                    <span>200</span>
                    <span>
                      <span> ★ </span>
                    </span>
                    оцінок
                  </p>
                  <p className={s.footerTextLineBreaks}>
                    {data.product.description}
                  </p>
                  <div className={s.footerCalories}>
                    {(selectedOption === 'tall' && data.product.short)
                    || (selectedOption === 'grande' && data.product.tall)
                    || (selectedOption === 'venti' && data.product.grande)
                    || ((selectedOption === 'trenta' && data.product.venti))}
                    {' '}
                    калорій
                  </div>
                  {!isNutrion && <button type="submit" onClick={handleClick} className={s.footerLink}>Повний перелік поживних речовин і інгредієнтів</button>}

                </div>
                <div className={s.footerFlexGrowColumnRight} />
              </div>
            </aside>
          </div>
        </>
      )}

    </main>
  );
}

export default Product;
