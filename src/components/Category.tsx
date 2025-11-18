import { product } from "../assets/assets";

function Category({ category }: any) {
  const productItems = product.filter((item) => item.category === category);

  return (
    <div className="mx-3 px-5 py-2">
      <p className="bg-brown-chestnut rounded-t text-2xl text-center font-semibold py-1">
        {category}
      </p>
      <div className="bg-soft-linen px-1.5 shadow-Coffee-Bean shadow-[-2px_5px_5px] rounded-b">
        {productItems.map((item) => (
          <div key={item.id} className=" flex items-baseline justify-between ">
            <p className="text-lg text-Dark-Mocha font-medium">{item.name}</p>
            <hr
              className="w-[100px] md:w-[200px] mx-2 border-t border-dashed"
            />
            <p className="text-lg text-Dark-Mocha font-medium">
              $ {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
