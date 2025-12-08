import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface itemType {
  image: any;
  id: string;
  name: string;
  price: number;
}

function Product({ image, id, name, price }: itemType) {
  const timeline = gsap.timeline({ direction: 0.2,paused: true });
  useGSAP(() => {
    timeline
      .to(`.line${id}`, {
        width: "0",
      }).to(`.p${id}`,{fontSize:25},'-=.4')
      .to(
        `.img${id}`,
        {
          width: 60
        },
        "-=.5"
      ).to(`.price${id}`,{
        paddingRight:30
      },"-=.5")
      .to(`.div${id}`, {
        color: "#ffffff",
        backgroundColor: "#583f34",
        flexWrap:'wrap'
      },"-=.2")
  }, []);

  return (
    <div
      onMouseEnter={() => {
        timeline.play();
      }}
      onMouseLeave={() => {
        timeline.reverse();
      }}
      onTouchStart={() => {
        timeline.play();
      }}
      onTouchEnd={() => {
        timeline.reverse();
      }}
      key={id}
      className={`div${id} overflow-hidden flex items-center gap-2 justify-between rounded  text-Dark-Mocha hover:shadow-Dark-Mocha hover:shadow-[0px_5px_4px]`}
    >
      <img
        src={image}
        className={`img${id} w-0  border-r-2 border-white `}
        alt=""
      />
      <p className={`p${id} text-center min-w-fit text-lg font-medium`}>
        {name}
      </p>
      <div className={`line${id} h-[1px] w-[90vw] bg-black`} />
      <p className={`price${id} text-end text-lg min-w-fit font-medium`}>
        $ {price}
      </p>
    </div>
  );
}

export default Product;
