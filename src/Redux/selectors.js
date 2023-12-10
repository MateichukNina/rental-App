export const selectFiltersCars = (state) => state.filter.formData;
export const favoriteCar = (state) => state.favorite.cars;
export const allFavoriteCars = (state) => state.favorites.cars.length;
export const selectCars = (state) => state.cars.catalog;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectTotalCars = (state) => state.cars.catalog.length;
export const selectIsFilterOn = (state) => state.cars.isFilter;