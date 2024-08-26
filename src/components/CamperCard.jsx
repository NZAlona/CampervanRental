import svg from '../../public/symbol-defs.svg';
import { FaStar } from 'react-icons/fa6';
import { SlLocationPin } from 'react-icons/sl';
import css from '../components/CamperCard.module.css';
import VansFeature from './VansFeature';
import CamperModal from './Modal';
import { useState } from 'react';

export default function CamperCard({ filteredVehicles }) {
  // const [favorites, setFavorites] = useState([]);

  const [open, setOpen] = useState(false);
  const [selectedCamper, setSelectedCamper] = useState(null);

  // const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  // setFavorites(savedFavorites);

  // const handleFavoriteClick = camper => {
  //   const isAlreadyFavorite = favorites.some(fav => fav._id === camper._id);
  //   let updatedFavorites;

  //   if (isAlreadyFavorite) {
  //     updatedFavorites = favorites.filter(fav => fav._id !== camper._id);
  //   } else {
  //     updatedFavorites = [...favorites, camper];
  //   }

  //   setFavorites(updatedFavorites);
  //   localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  // };

  const handleOpen = camper => {
    setSelectedCamper(camper);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCamper(null);
  };

  return (
    <>
      {filteredVehicles.map(vehicle => (
        <li key={vehicle._id} className={css.item}>
          <div>
            <img src={vehicle.gallery[0]} className={css.photo} alt="photo of campervan" />
          </div>
          <div className={css.wrapper}>
            <span className={css.positioning}>
              <h3 className={css.txt}>{vehicle.name}</h3>
              <span className={css.alighment}>
                <p className={css.txt}> &#x20AC;{vehicle.price + ',00'}</p>
                <svg
                  width={24}
                  height={24}
                  className={css.icon}
                  // className={`${css.icon} ${
                  //   favorites.some(fav => fav._id === vehicle._id) ? css.favorite : ''
                  // }`}
                  // onClick={() => handleFavoriteClick(vehicle)}
                >
                  <use href={svg + '#icon-heart'}></use>
                </svg>
              </span>
            </span>

            <div className={css.layout}>
              <p>
                <FaStar color="rgba(255, 197, 49, 1)" size={16} className={css.color} />

                <span className={css.space}> {vehicle.rating} (2 Reviews)</span>
              </p>
              <p>
                <SlLocationPin /> {vehicle.location}
              </p>
            </div>

            <p className={css.description}>{vehicle.description}</p>

            <VansFeature features={vehicle} />
            <button className={css.btn} onClick={() => handleOpen(vehicle)}>
              See more
            </button>
          </div>
        </li>
      ))}
      <CamperModal open={open} handleClose={handleClose} camper={selectedCamper} />
    </>
  );
}
