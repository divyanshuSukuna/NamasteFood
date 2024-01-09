import { CDN_URL } from "../utils/constants";
import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, sla } = resData.info;
  return (
    <div className="res-card transition-transform transform hover:scale-105 cursor-pointer overflow-hidden w-[250px] h-[400px] border-gray-300 bg-gray-200 shadow-md rounded-lg overflow-hidden p-3 mb-2 cursor-pointer hover:bg-gray-200 ">
      <img
        className="res-logo h-[40%] w-full object-cover border rounded-md"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt=""
      />
      <h3 className="res-name font-semibold text-lg py-5">{name}</h3>
      <h4 className="py-2">{cuisines.join(", ")}</h4>
      <h4>{avgRating + " 🌟"}</h4>
      <h4>{sla.deliveryTime + " minutes"}</h4>
    </div>
  );
};

export default RestaurantCard;

// high order component
// RestaurantCard [input]      =====>     RestaurantCardPromoted [Ouput]

export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard />
      </div>
    );
  };
};
