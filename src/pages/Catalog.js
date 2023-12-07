import React from 'react';
import { Link } from "react-router-dom";

export const Catalog = ({ cars }) => {
  return (
    <div>
      <ul>
        {cars && cars.length > 0 ? (
          cars.map((car) => (
            <li key={car.id}>
              <Link to={`/catalog/${car.id}`}>{car.make} {car.model}</Link>
            </li>
          ))
        ) : (
          <p>No cars available</p>
        )}
      </ul>
    </div>
  );
};