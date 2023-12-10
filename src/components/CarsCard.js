import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//  import { favoriteCar } from "Redux/selectors.js";
import { addFavorite, removeFavorite } from "Redux/favorites/favoriteSlice"
import { Modal } from './Modal';
import favoriteSlice from 'Redux/favorites/favoriteSlice';

export const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const favoriteCars = useSelector(favoriteCar);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAddFavorite = () => {
    if (!isFavorite) {
      dispatch(addFavorite(car));
      setIsFavorite(true);
    } else {
      dispatch(removeFavorite(car.id));
      setIsFavorite(false);
    }
  };

  if (!car) {
    return null; // Почекайте, поки дані будуть завантажені
  }

  return (
    <div className="car-card">
      <li key={car.id}>
        <button type='button' onClick={handleAddFavorite}>Like</button>
        <img src={car.img} alt={`${car.make} ${car.model}`} class="my-image"/>
        {car.make} {new Date(car.year).getFullYear()}
        <p>{car.address}</p>
        <button type="button" onClick={openModal}>
          Learn more
        </button>
      </li>

      {isModalOpen && <Modal car={car} onClose={closeModal} />}
    </div>
  );
};