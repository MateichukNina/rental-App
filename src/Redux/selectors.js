const selectFiltersCars = (state) => state.filter.formData;
const favoriteCar = (state) => state.favorite.cars;
const allFavoriteCars = (state) => state.favorites.cars.length;
const selectCars = (state) => state.cars.catalog;
const selectIsLoading = (state) => state.cars.isLoading;
const selectError = (state) => state.cars.error;
const selectTotalCars = (state) => state.cars.catalog.length;
const selectIsFilterOn = (state) => state.cars.isFilter;

export default {
  selectFiltersCars,
  favoriteCar,
  allFavoriteCars,
  selectCars,
  selectIsLoading,
  selectError,
  selectTotalCars,
  selectIsFilterOn,
};