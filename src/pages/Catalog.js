import React  from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CarList } from 'components/CarList';
import { getCars } from '../Redux/cars/operations';
import { selectIsLoading, selectCurrentPage } from '../Redux/selectors';


export const Catalog = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const page = useSelector(selectCurrentPage)

  useEffect(() => {
      dispatch(getCars())
      
  }, [dispatch, page])

  // const [filters, setFilters] = useState({
  //   make: '',
  //   maxHourlyPrice: null,
  //   maxMileage: null,
  // });

  // const handleFilterChange = (e) => {
  //   const { name, value } = e.target;
  //   setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  // };

  // const filteredCars = cars.filter((car) => {
  //   return (
  //     (!filters.make || car.make.toLowerCase().includes(filters.make.toLowerCase())) &&
  //     (!filters.maxHourlyPrice || car.hourlyPrice <= filters.maxHourlyPrice) &&
  //     (!filters.maxMileage || car.mileage <= filters.maxMileage)
  //   );
  // });


  return (
    <div>
      
         {isLoading && <p>Loading...</p>}
      <CarList/>
    </div>
  );
};
