import React from 'react';

export const Modal = ({ car, onClose }) => (
  <div className="modal">
    <div className="modal-content">
    <img src={car.img} alt={`${car.make} ${car.model}`} />
      <h2>{`${car.make} ${car.model}`}</h2>
      <p>Address: {car.address}</p>
     
      <button onClick={onClose} type="button">
        Close
      </button>
    </div>
  </div>
);