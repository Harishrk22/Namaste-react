import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constant";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
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
    <>
      <div className="text-center flex flex-col  justify-center items-center">
        <div className="px-4 py-4 bg-white shadow-lg align-middle w-100  ">
          <h1 className="font-bold text-2xl">{resData?.name}</h1>
          <h3>{resData?.costForTwoMessage}</h3>
          <p>{resData?.cuisines?.join(", ")}</p>

          <button
            className="px-4 py-2 bg-green-400 text-white rounded-lg cursor-pointer hover:bg-green-700"
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
        </div>
      </div>
      {menuData.map((menu) => (
        <RestaurantCategories
          categoriesData={menu?.card?.card}
          key={menu?.card?.card?.categoryId}
        />
      ))}
    </>
  );
};

export default RestaurantMenu;
