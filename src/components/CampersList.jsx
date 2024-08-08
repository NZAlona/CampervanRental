import css from '../components/CampersList.module.css';
import svg from '../../public/symbol-defs.svg';
import { FaStar } from 'react-icons/fa6';
import { SlLocationPin } from 'react-icons/sl';
import VansFeature from './VansFeature';
import { selectItems } from '../redux/selectors';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CampersList() {
  const campers = useSelector(selectItems);
  const [displayVans, setDispalyVans] = useState(4);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Загружаем избранные из localStorage при инициализации компонента
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const handleLoadMore = () => {
    setDispalyVans(prevVans => prevVans + 4);
  };

  const handleFavoriteClick = camper => {
    const isAlreadyFavorite = favorites.some(fav => fav._id === camper._id);
    let updatedFavorites;

    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter(fav => fav._id !== camper._id);
    } else {
      updatedFavorites = [...favorites, camper];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <ul className={css.list}>
        {campers.slice(0, displayVans).map(camper => (
          <li key={camper._id} className={css.item}>
            <div>
              <img src={camper.gallery[0]} className={css.photo} alt="photo of campervan" />
            </div>
            <div className={css.wrapper}>
              <span className={css.positioning}>
                <h3 className={css.txt}>{camper.name}</h3>
                <span className={css.alighment}>
                  <p className={css.txt}> &#x20AC;{camper.price + ',00'}</p>
                  <svg
                    width={24}
                    height={24}
                    className={`${css.icon} ${
                      favorites.some(fav => fav._id === camper._id) ? css.favorite : ''
                    }`}
                    onClick={() => handleFavoriteClick(camper)}
                  >
                    <use href={svg + '#icon-heart'}></use>
                  </svg>
                </span>
              </span>

              <div className={css.layout}>
                <p>
                  <FaStar color="rgba(255, 197, 49, 1)" size={16} className={css.color} />

                  <span className={css.space}> {camper.rating} (2 Reviews)</span>
                </p>
                <p>
                  <SlLocationPin /> {camper.location}
                </p>
              </div>

              <p className={css.description}>{camper.description}</p>

              <VansFeature features={camper} />
              <button className={css.btn}>See more</button>
            </div>
          </li>
        ))}
        <div className={css.container}>
          {displayVans < campers.length && (
            <button
              className={`${css.load} ${displayVans >= campers.length ? css.hidden : ''}`}
              onClick={handleLoadMore}
            >
              Load more
            </button>
          )}
        </div>
      </ul>
    </>
  );
}
