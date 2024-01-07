import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { category } from "../../assets/data/data";
import Slider from "react-slick";

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className=" z-30">
      <div>
        <Slider {...settings}>
          {category.map((item) => (
            <div className=" " key={item.id}>
              <div className="">
                <img src={item.cover} alt="" />
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Categories;
