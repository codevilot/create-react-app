import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banners from "../../public/data/json/banner.json";
import { banner } from "../type/type";

export default function Home() {

  return (
    <Carousel showThumbs={false}>
      {banners.map((banner: banner) => (
        <div key={banner.id} className="lg:h-[48rem] h-80">
          <img src={banner.img} />
          <div className="absolute inset-y-1/2 inset-x-1/4 pl-5">
            <div className="text-2xl text-left">{banner.title}</div>
            <div className="text-xs text-left pt-1 pb-2">{banner.desc}</div>
            <Link
              className="float-left text-white bg-stone-900 p-2 rounded-lg text-xs"
              to={banner.link}
            >
              바로가기 ➜
            </Link>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
