import { useEffect, useState } from "react";
import { MENU_API } from "./constant";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [RestaurantMenu, setRestaurantMenu] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    setResInfo(jsonData);

    const menuData =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards || [];
    setRestaurantMenu(menuData);
  };

  return { resInfo, RestaurantMenu };
};
export default useRestaurantMenu;
