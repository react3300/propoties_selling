import instance from "./axios";

const uri = {
  carTypes: "/cars/types",
  carMakes:"/cars/makes",
  carYears:"/cars/years",
  cars:"/cars",
};

export const carTypes = async () => {
  return await instance.get(uri.carTypes);
};
export const carMakes = async () => {
    return await instance.get(uri.carMakes);
};
export const carYears = async () => {
    return await instance.get(uri.carYears);
};
export const cars = async () => {
    return await instance.get(uri.cars+`&limit=10&page=0`);
};
