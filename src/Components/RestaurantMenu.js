import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { usePaframs } from "react-router";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [filteredMenu, setFilteredMenu] = useState([]);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const jsonData = await data.json();
    console.log(jsonData);

    setResInfo(jsonData);
    const menuData =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards || [];

    setFilteredMenu(menuData);
  };

  if (!resInfo) return <Shimmer />;

  const resData = resInfo?.data?.cards[2]?.card?.card?.info;
  const menuData = filteredMenu;

  return (
    <div className="restaurant-menu">
      <h1>{resData?.name}</h1>
      <h3>{resData?.costForTwoMessage}</h3>
      <p>{resData?.cuisines?.join(", ")}</p>

      <button
        onClick={() => {
          const filtered = filteredMenu.filter(
            (res) => res?.card?.info?.itemAttribute?.vegClassifier === "VEG"
          );
          console.log("filter", filtered);
          setFilteredMenu(filtered);
        }}
      >
        Veg-only
      </button>
      <ul>
        {menuData.map((menu) => (
          <li key={menu.card.info.id}>
            <span>{menu?.card?.info?.name}</span>
            <span className="price">
              Rs.
              {menu?.card?.info?.price / 100 ||
                menu?.card?.info?.defaultPrice / 100}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
