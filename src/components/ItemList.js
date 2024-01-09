const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            className="flex justify-between items-center m-2 p-2 border-gray-200 border-b-2"
            key={item.card.info.id}
          >
            <div className="flex flex-col text-left ">
              <div className="text-xs">
                <span>{item.card.info.isVeg ? "🟢 VEG" : ""}</span>
              </div>
              <span>{item.card.info.name}</span>
              <span>₹ {item.card.info.price / 100}</span>
            </div>
            <div className="">
              <img
                className="w-36 h-24 rounded-rounded"
                src="https://www.manjulaskitchen.com/wp-content/uploads/paneer_pakoras.jpg"
                alt=""
              />
              <div className="overlay-button">
                <button className="text-sm border-gray-200 border-2 py-2 px-4 m-1 rounded-lg bg-gray-400">
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
