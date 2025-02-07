import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, RestaurantMenu } = useRestaurantMenu(resId);
  const [filteredMenu, setFilteredMenu] = useState([]);
  console.log(resInfo);
  console.log(filteredMenu);
  if (!resInfo) return <Shimmer />;

  const resData = resInfo?.data?.cards[2]?.card?.card?.info;
  const menuData = RestaurantMenu;

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
