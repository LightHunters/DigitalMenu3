import { product } from "../assets/assets.ts";
import Category from "./Category.tsx";

function ListMenu() {
  let category = "";

  return (
    <div className="">
      {product.map((item,index) => {
        if (category !== item.category) {
          category = item.category;
          return <Category key={index} category={item.category}  />;
        }
      })}
    </div>
  );
}

export default ListMenu;
