import ItemList from "./ItemList";
const RestaurantCategories = (props) => {
  const title = props?.categoriesData?.title;
  //console.log(props);
  return (
    <div className="w-8/12 bg-gray-100 mx-auto my-4 p-4 ">
      <div className="flex justify-between">
        <span className="font-bold">
          {title} ({props?.categoriesData?.categories.length})
        </span>
      </div>
      <ItemList items={props?.categoriesData?.categories} />
    </div>
  );
};
export default RestaurantCategories;
