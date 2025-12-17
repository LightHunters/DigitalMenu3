import { useContext } from "react";
import Category from "./Category.tsx";
import { languageProduct } from "./ContextManagement.tsx";

function ListMenu() {

const LaProduct = useContext(languageProduct);

let product = LaProduct.dataProduct;

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
