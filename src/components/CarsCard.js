import React, { useState} from 'react';
import { useDispatch} from 'react-redux';

import { addFavorite, removeFavorite } from '../Redux/favorites/favoriteSlice';
import { Modal } from './Modal';


export const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  return (
    <ul className="car-card">
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
    </ul>
  );
};