import React, { useState } from 'react';
import CarsCard from './CarsCard'; // Припустимо, що у вас є компонент CarCard

export const CatalogPage = ({ cars }) => {
  const [filters, setFilters] = useState({
    make: '',
    maxHourlyPrice: null,
    maxMileage: null,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const filteredCars = cars.filter((car) => {
    return (
      (!filters.make || car.make.toLowerCase().includes(filters.make.toLowerCase())) &&
      (!filters.maxHourlyPrice || car.hourlyPrice <= filters.maxHourlyPrice) &&
      (!filters.maxMileage || car.mileage <= filters.maxMileage)
    );
  });


  return (
    <div>
         <h2>Car Catalog</h2>
      <form>
        <label>
          Make:
          <input type="text" name="make" value={filters.make} onChange={handleFilterChange} />
        </label>
        <label>
          Max Hourly Price:
          <input type="number" name="maxHourlyPrice" value={filters.maxHourlyPrice || ''} onChange={handleFilterChange} />
        </label>
        <label>
          Max Mileage:
          <input type="number" name="maxMileage" value={filters.maxMileage || ''} onChange={handleFilterChange} />
        </label>
        <button type="submit">Apply Filters</button>
      </form>

      {filteredCars.map((car) => (
        <CarsCard key={car.id} car={car} />
      ))}
    </div>
  );
};
