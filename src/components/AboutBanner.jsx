import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerone from "../images/banner.jpg";
import bannertwo from "../images/13.jpg";
import bannerthree from "../images/10.jpg";

const AboutBanner = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000} // Change slide interval in milliseconds (optional)
      transitionTime={500} // Optional: Transition duration in milliseconds
    >
      <div className="carousel-item">
        <img src={bannerone} alt="Banner One" />
        <div className="legend-container">
          <p className="legend-text">Text 1</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={bannertwo} alt="Banner Two" />
        <div className="legend-container">
          <p className="legend-text">Text 2</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={bannerthree} alt="Banner Three" />
        <div className="legend-container">
          <p className="legend-text">Text 3</p>
        </div>
      </div>
    </Carousel>
  );
};

export default AboutBanner;
