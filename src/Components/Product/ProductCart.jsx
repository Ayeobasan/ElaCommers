import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux/Slice/cartSlice";
import { toast } from "react-toastify";
// import "./App.css";

const ProductCart = ({ key, id, name, price, cover }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }));
    toast.success("added")
  };
  return (
    <div
      className="  bg-white md:h-[45vh] xd:h-[30vh] p-4 rounded-lg border-2 
      transition-all
     ease-in-out duration-[1s]  shadow-xl"
      id="product"
    >
      <div className="sm xd:flex items-top ">
        <Link to="/account" className="w-[80%]">
          <img
            className="w-[100%] xxs:object-cover h-[20vh] md:h-[30vh] xd:h-[25vh] "
            src={cover}
            alt=""
          />
        </Link>
        <div className=" xd:relative   text-sm flex  items-end justify-between w-full ">
          <div className=" h-[100%] xd:pl-2 w-[75%] xd:w-[100%]">
            <p>${price}</p>
            <p className=" text-xs md:text-base">{name}</p>
          </div>
          <div>
            <button
              onClick={addToCart}
              className="text-[15px] mt-7 xd:absolute 
               xd:bottom-0 right-0 rounded p-[4px]  w-[100%] 
                xd:w-[50%] h-9 ml-auto flex items-center justify-between   bg-white shado "
            >
              <p className="s:hidden xs:block">Add</p>
              <AiOutlinePlusCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
