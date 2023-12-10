import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ car, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &#x2715;
        </button>
        <h2>{car.make} {car.model}</h2>
        <li key={car.id}>
        <img src={car.img} alt={`${car.make} ${car.model}`} class="my-image" />
        <p>Year: {new Date(car.year).getFullYear()}</p>
        <p>Address: {car.address}</p>
       

        <button>Rental Car</button>
        </li>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

