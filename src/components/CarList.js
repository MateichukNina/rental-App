import React, {useState, useEffect} from 'react';
// import { Link } from "react-router-dom";
import { getCar } from 'API';
import { CarCard } from './CarsCard';

export const CarList = () => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsData = await getCar(currentPage);
        setCars((prevCars) => [...prevCars, ...carsData]);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
  
    fetchCars();
  }, [currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="card-container">
      {cars.length > 0 ? (
        <div className="car-cards">
          {cars.map((car) => ( 
            <CarCard key={`car-${car.id}`} car={car} />
          ))}
        </div>
      ) : (
        <p>No cars available</p>
      )}
      <button onClick={handleLoadMore}>Load More</button>
    </div>
  );
};