import { CDN_URL } from "../utils/constant";

const ResCard = (props) => {
  const { resData } = props;
  const { cuisines, name, avgRating, sla } = resData?.info;
  return (
    <div
      data-testid="resCard"
      className="p-4 m-4 w-[265] rounded-xl size-120 shadow-xl hover:scale-95"
    >
      <img
        className="rounded-xl size-60"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating + " rating"}</h4>
      <h4>{sla.deliveryTime + " mins"}</h4>
    </div>
  );
};

export const withPromotedLabel = (ResCard) => {
  return () => {
    <div>
      <label className="absolute bg-black p-4 m-4 rounded-r-xl">Promoted</label>
      <ResCard />
    </div>;
  };
};

export default ResCard;
