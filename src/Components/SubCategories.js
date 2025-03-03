import Dishes from "./Dishes";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const SubCategories = (props) => {
  const dispatch = useDispatch();
  const handleAddItem = (dish) => {
    dispatch(addItem(dish));
    console.log(dish);
  };
  return (
    <>
      {props.item.map((dish) => {
        return (
          <div className="flex justify-between p-4" key={dish?.card?.info?.id}>
            <div className="p-4 m-4 w-10/12 flex flex-col text-left">
              <div className="flex justify-between p-2 ">
                <div className="w-100% flex flex-col">
                  <h1>{dish?.card?.info?.name}</h1>
                  <span>
                    Rs.
                    {dish?.card?.info?.price / 100 ||
                      dish?.card?.info?.defaultPrice / 100}
                  </span>
                </div>
              </div>
              <p className="m-2 b-2 ">{dish?.card?.info?.description}</p>
            </div>

            <div className="relative  flex align-middle items-center ">
              <img
                src={CDN_URL + dish?.card?.info?.imageId}
                className="w-28 h-28"
              ></img>
              <button
                className="p-3 mt-0  rounded-sm w-20 bg-white text-green-500 shadow-lg  m-auto absolute bottom-7 left-4 z-50 cursor-pointer"
                onClick={() => handleAddItem(dish)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SubCategories;
