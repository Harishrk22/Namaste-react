import ResCard from "./ResCard";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const { newresList } = useRestaurantList();
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    setFilteredList(newresList);
  }, [newresList]);
  const handleFilter = () => {
    const filteredResList = newresList.filter((res) => {
      return res.info.avgRating > 4.2;
    });
    setFilteredList(filteredResList);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Oops! Check your internet Connection!!</h1>;

  return newresList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            item = e.target.value;
            setSearchText(item);
            const filteredData = newresList.filter((res) =>
              res.info.name.toLowerCase().includes(item.toLowerCase())
            );
            setFilteredList(filteredData);
          }}
        ></input>
        {/* <button
          onClick={() => {
            const filteredData = newresList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(filteredData);
          }}
        >
          search
        </button> */}
        <button
          className="filter-btn"
          onClick={() => {
            handleFilter();
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredList.map((res) => (
          <Link to={`/restaurant/${res.info.id}`} key={res.info.id}>
            <ResCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
