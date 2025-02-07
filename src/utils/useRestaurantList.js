import { useEffect, useState } from "react";
import { RES_API } from "./constant";
const useRestaurantList = () => {
  const [newresList, setNewresList] = useState([]);

  const fetchResData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setNewresList(restaurants);
  };

  useEffect(() => {
    fetchResData();
  }, []);
  return { newresList };
};
export default useRestaurantList;
