import { useState } from "react";
import SubCategories from "./SubCategories";

const ItemList = ({ items }) => {
  const [openCategoryId, setOpenCategoryId] = useState(null);

  const handleClick = (categoryId) => {
    setOpenCategoryId(openCategoryId === categoryId ? null : categoryId);
  };

  return (
    <div>
      {items.map((item) => {
        const isOpen = openCategoryId === item.categoryId;
        return (
          <div
            className="w-100% bg-gray-50 mx-auto my-4 p-4 shadow-xl"
            key={item.categoryId}
          >
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => handleClick(item.categoryId)}
            >
              <span className="font-bold">
                {item.title} ({item.itemCards.length})
              </span>
              <p>{isOpen ? "⬆️" : "⬇️"}</p>
            </div>
            {isOpen && <SubCategories item={item.itemCards} />}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
