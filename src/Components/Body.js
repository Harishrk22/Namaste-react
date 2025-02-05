import ResCard from "./ResCard";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [newresList, setNewresList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const handleFilter = () => {
    const filteredResList = newresList.filter((res) => {
      return res.info.avgRating > 4.2;
    });
    setFilteredList(filteredResList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9754605&lng=80.2207047&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setNewresList(restaurants);
    setFilteredList(restaurants);
  };

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
