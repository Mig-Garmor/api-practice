import axios from "axios";

export const fetchByCountry = async (name) => {
  const result = await axios(`https://restcountries.com/v3.1/name/${name}`);
  return result;
};
