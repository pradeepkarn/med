import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import bannerone from "../images/skinnenhancement.jpg";
import bannertwo from "../images/laserhair.jpg";
import bannerthree from "../images/body-conditioning.jpg";
import bannerfour from "../images/facialimprv.jpg";
import bannerfive from "../images/otherservices.jpg";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const items = [
    { id: 1, src: bannerone, text: "SKIN ENHANCEMENTS" },
    { id: 2, src: bannertwo, text: "LASER HAIR REMOVAL" },
    { id: 3, src: bannerthree, text: "BODY CONTOURING" },
    { id: 4, src: bannerfour, text: "FACIAL IMPROVEMENTS" },
    { id: 5, src: bannerfive, text: "OTHER SERVICES" },
];

const MultiSlider = () => {
    return (
        <div className="slider-container">
            <Carousel
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000} // Change slide interval in milliseconds (optional)
                infinite={true}
            >
                {items.map((item) => (
                    <div key={item.id} className="slider-item">
                         <div className="image-overlay" />
                        <img src={item.src} alt={`Slide ${item.id}`} />
                        <p className="legend-text">{item.text}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MultiSlider;
