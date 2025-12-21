import { useContext } from "react";
import Product from "./Product";
import { languageProduct } from "./ContextManagement";

function Category({ category }: any) {

const LaProduct = useContext(languageProduct)

let product=LaProduct.dataProduct

  const productItems = product.filter((item) => item.category === category);


  return (
    <div className="mx-3 px-5 py-2">
      <p className="bg-brown-chestnut rounded-t text-2xl text-center font-semibold py-1 title">
        {category}
      </p>
      <div className="flex flex-col gap-3 bg-soft-linen p-1.5 shadow-Coffee-Bean shadow-[-2px_5px_5px] rounded-b">
        {productItems.map((item) => (
          <Product key={item.id} {...item}/>
        ))}
      </div>
    </div>
  );
}

export default Category;
