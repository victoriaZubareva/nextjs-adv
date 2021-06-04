export const selectCars = (state) => state.cars;
export const selectCarById = (id) => (state) => state.cars.find((car) => car.id === id);
