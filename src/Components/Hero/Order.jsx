import React from "react";
import { order } from "../../assets/data/data";

const Order = () => {
  return (
    <div className="bg-white border-[1px] border-[#ededed] rounded-lg shadow-2xl m-4">
      <div className="grid grid-cols-4 gap-2 p-7">
        {order.map((item, i) => (
          <div className="flex items-center justify-between" key={i}>
            <div className="">
                <h1 className="bg-black rounded-full text-white py-4 px-6">{item.id}</h1>
            </div>
            <div className="ml-3">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
