import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  //if resInfo is not null then it will proceed to the below code

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu flex-col mx-40 my-20">
      <h1 className="res-name text-2xl font-bold pb-5">{name}</h1>
      <h3 className="cusines text-lg font-semibold ">{cuisines.join(", ")}</h3>
      <h3 className="cost-two text-lg font-semibold">{costForTwoMessage}</h3>
      <h2 className="pt-10 text-lg font-semibold">Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
