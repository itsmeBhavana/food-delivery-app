import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "./constants";

const useRestaurants = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_URL);
    const resData = await data.json();
    setListOfRestaurants(resData);
  };
  return listOfRestaurants;
};

export default useRestaurants;
