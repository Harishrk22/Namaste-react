import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [newresList, setNewresList] = useState(resList);
  const handleFilter = () => {
    const filteredResList = newresList.filter((res) => {
      return res.info.avgRating > 4;
    });
    setNewresList(filteredResList);
  };
  return (
    <div className="body">
      <div className="filter">
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
        {newresList.map((res) => (
          <ResCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
