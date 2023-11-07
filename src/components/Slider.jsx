import Slider from "react-slick";
import bannerone from "../images/banner.jpg";
import bannertwo from "../images/banner.jpg";
import bannerthree from "../images/banner.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import BannerText from "./BannerText";
const AboutBanner = () => {
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100
         hover:text-orange-600 hover:bg-white 
         cursor-pointer duration-200 rounded-full text-2xl 
         flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600
         hover:bg-white cursor-pointer duration-200 rounded-full
          text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-full h-full relative">
          <img priority src={bannerone} alt="Banner" className="w-full h-full relative" />
          <BannerText title="Outware Picks" />
        </div>
        <div className="w-full h-full relative">
          <img src={bannertwo} alt="Banner" className="w-full h-full relative" />
          <BannerText title="Seasonal offers" />
        </div>
        <div className="w-full h-full relative">
          <img src={bannerthree} alt="Banner" className="w-full h-full relative" />
          <BannerText title="Best for men" />
        </div>
      </Slider>
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  )
}

export default AboutBanner