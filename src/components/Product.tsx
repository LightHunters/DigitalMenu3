import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useContext } from "react";
import { FcLike } from "react-icons/fc";
import { languageProduct } from "./ContextManagement";

interface itemType {
  image: any;
  id: string;
  name: string;
  price: number;
  taste: string;
  customer_satisfaction_percentage: number;
}

function Product({
  image,
  id,
  name,
  price,
  taste,
  customer_satisfaction_percentage,
}: itemType) {
  const timeline = gsap.timeline({ direction: 1, paused: true });
  useGSAP(() => {
    gsap.set(`.img${id}`, {
      width: "25%",
    });

    timeline
      .to(`.price1${id}`, { opacity: 0 })
      .to(
        `.img${id}`,
        {
          width:"60%",
          borderRadius: 4,
        },
        "-=.5"
      )
      .to(`.div${id}`, { boxShadow: "0px 6px 6px 5px #583f34 " }, "-=.3")
      .to(`.taste${id}`, {
        height: 95,
      })
      .to(`.price2${id}`, { height: 32 }, "-=.2");
  }, []);

  const LaProduct = useContext(languageProduct)
  const {language}=LaProduct

  return (
    <div
      onClick={() => {
        timeline.play();
      }}
      onMouseLeave={() => {
        timeline.reverse();
      }}
      // onTouchStart={() => {
      //   timeline.play();
      // }}
      // onTouchEnd={()=>timeline.reverse()}
      className={`div${id} bg-Rich-Walnut/80 text-white p-2 rounded flex items-center gap-3 cursor-pointer`}
    >
      <div
        className={`img${id} overflow-hidden rounded-2xl border-2 border-Dark-Umber `}
      >
        <img src={image} alt={name} className={`w-full h-full object-center`} />
      </div>

      <div className={`description${id} w-[73%] items-center`}>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl ">{name}</h3>
          <p
            className={`price1${id} ${
              language === "En" && "md:text-2xl pr-4"
            }  `}
          >
            {language === "Fa" ? price + "هزار تومان" : "$" + price}
          </p>
        </div>

        <div className={`taste${id} h-0 overflow-hidden my-auto`}>
          <p className={` text-[16px] font-caveat`}>{taste}</p>
        </div>

        <div
          className={`price2${id} flex ${
            language === "Fa" && "flex-row-reverse gap-3"
          } items-center overflow-hidden h-0`}
        >
          <div className={`flex ${
            language === "Fa" && "flex-row-reverse"
          } items-center md:text-2xl pr-4`}>
            <FcLike className="md:size-5 size-2.5" />
            <p className="">{customer_satisfaction_percentage}%</p>
          </div>
          <p className={`${language === "En" && "md:text-2xl"}`}>
            {language === "Fa" ? price + "هزار تومان" : "$" + price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
