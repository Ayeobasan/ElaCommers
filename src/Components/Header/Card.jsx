import React, { useEffect, useState } from "react";
// import { BiShoppingBag } from "react-icons/bi";
// import { AiOutlineSearch } from "react-icons/ai";
// import Header from "./Header";
import { FaTimes } from "react-icons/fa";
import { product } from "../../assets/data/data";
import CardItems from "./CardItems";
import { useSelector } from "react-redux";

const Card = ({ openCard, }) => {
  // console.log(total);
  //total
  const cartItems = useSelector((state) => state.cart.itemsList);
  const itemLists = useSelector((state) => state.cart.itemsList);

  let total = 0;
  itemLists.forEach((item) => {
    total += item.totalPrice;
  });
  console.log(items);

 

  

  return (
    <>
      <div className="absolute z-30 hidden sm:block  w-full">
        <div className=" fixed w-[100%]">
          <div className=" bg-[#00000086] ">
            <div className="bg-white shadow-2xl rounded-s-[5%] p-4 w-[60%] h-[100vh] md:w-[50%] lg:w-[50%]  ml-auto">
              <div className="flex w-full font-bold text-xl px-4 py-1 items-center  justify-between">
                <p>Cart Item</p>
                <div className=" cursor-pointer hover:border-[1px] p-1 rounded-xl" onClick={openCard}>
                  <FaTimes size={30} />
                </div>
              </div>
              <div className=" overflow-y-scroll h-[80vh]">
                <div className="flex flex-col justify-between h-[100vh]">
                  {/* sticky overflow-scroll */}
                  <div className=" ">
                    {cartItems.map((item) => (
                      <CardItems
                        id={item.id}
                        cover={item.cover}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}
                      />
                    ))}
                  </div>
                  <button
                    type="submit"
                    className=" fixed flex w-[60%] md:w-[50%] bottom-3 justify-center "
                  >
                    <div className="bg-black bg-opacity-80 backdrop-blur-[1px] drop-shadow-lg  text-white h-14 items-center rounded-lg justify-center w-[80%] flex  ">
                      <div className="flex justify-between w-[65%]">
                        <span>Proceed To Checkout</span>
                        <label
                          className="flex items-center justify-betwe  en "
                          htmlFor=""
                        >
                          <p className="mr-5">|</p>
                          {/* <p>${total}</p> */}
                          <p>${Math.round(`${total}`)}</p>
                        </label>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="absolute z-30 block sm:hidden   w-full">
        <div className="bg-[#0000008a] fixed w-full h-[100vh]">
          <div className="bg-white absolute w-full bottom-0 px-4 h-[70vh] rounded-t-[10%]">
            <div className="flex w-full items-center p-2  justify-between">
              <p className=" font-bold text-xl">Cart Item</p>
              <div className=" cursor-pointer hover:border-[1px] p-1 rounded-xl" onClick={openCard}>
                <FaTimes size={30} />
              </div>
            </div>
            <div className=" overflow-y-auto h-[50vh]">
              <div className="flex flex-col justify-between h-[100vh]">
                {/* sticky overflow-scroll */}
                <div className=" ">
                  {cartItems.map((item) => (
                    <CardItems
                      id={item.id}
                      cover={item.cover}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      totalPrice={item.totalPrice}
                    />
                  ))}
                </div>
                <button
                  type="submit"
                  className=" fixed xs:flex w-full md:w-[50%] bottom-3 justify-center "
                >
                  <div className="bg-black bg-opacity-80 backdrop-blur-[1px] drop-shadow-lg  text-white h-14 items-center rounded-lg justify-center w-[90%] flex  ">
                    <div className="flex justify-between text-[10px] xxs:text-xs sm:text-base w-[65%]">
                      <span>Proceed To Checkout</span>
                      <label
                        className="flex items-center justify-betwe  en "
                        htmlFor=""
                      >
                        <p className="mr-5">|</p>
                        <p>$ {Math.round(`${total}`)}</p>
                      </label>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
