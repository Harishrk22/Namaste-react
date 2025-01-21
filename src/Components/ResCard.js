import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;

  const { cuisines, name, avgRating, sla } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating + " rating"}</h4>
      <h4>{sla.deliveryTime + " mins"}</h4>
    </div>
  );
};

export default ResCard;
