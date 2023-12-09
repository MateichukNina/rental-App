import React, { useState } from 'react';
import { Modal } from './Modal';

export const CarCard = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="car-card">
      <li>
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