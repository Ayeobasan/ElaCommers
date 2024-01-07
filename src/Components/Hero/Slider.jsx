import React from "react";

import { slide } from "../../assets/data/data";

const Slider = () => {
  return (
    <>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4">
          {slide.map((item, i) => (
            <div key={i}>
              <div>
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Slider;
