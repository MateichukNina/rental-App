import { useSelector } from "react-redux";
import { CarCard } from "./CarsCard";
import { favoriteCars } from "../Redux/selectors";

export const FavoriteList = () =>{
  const favoriteCars = useSelector(favoriteCars);

  return(
    <div>
   {favoriteCars.map((car) => {
          const { id } = car;

          return (
            <li key={id}>
              <CarCard carData={car} />
            </li>
          );
        })}
    </div>
  )
}
