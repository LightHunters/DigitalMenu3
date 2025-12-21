import { useContext } from "react";
import { languageProduct } from "./ContextManagement";

function Filter({ classFilter }: any) {
  const categorysEn = [
    "All",
    "Hot Drinks",
    "Cold Drinks",
    "Desserts",
    "Snacks",
    "Salads",
    "Soups",
    "Drinks",
  ];
  const categorysFa = [
    "همه",
    "نوشیدنی‌های گرم",
    "نوشیدنی‌های سرد",
    "دسرها",
    "اسنک‌ها",
    "سالادها",
    "سوپ‌ها",
    "نوشیدنی‌ها",
  ];

  const LaProduct = useContext(languageProduct);

  let categorys=categorysFa

if (LaProduct.language==="En") {
  categorys=categorysEn
}

  return (
    <div className={classFilter}>
      {categorys.map((category) => (
        <button
          key={category}
          onClick={() => LaProduct.setFilter(category)}
          className={`cursor-pointer text-sm py-1 px-2 rounded-2xl text-warm-lvory font-pacifico ${
            category == LaProduct.filter ? "bg-Rich-Walnut" : " bg-Pale-Cocoa"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filter;
